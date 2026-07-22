import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  console.log("[revalidate] chamado — method:", req.method, "secret ok:", secret === process.env.SANITY_REVALIDATE_SECRET);

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug: string = body?.slug?.current ?? "";

    console.log("[revalidate] payload:", JSON.stringify({ _type: body?._type, slug }));

    // Invalida todo o site (home, blog index, e todos os slugs via layout raiz)
    revalidatePath("/", "layout");

    // Invalida o padrão dinâmico inteiro — purga slug novo E slug antigo
    revalidatePath("/blog/[slug]", "page");

    // Se o slug específico vier no payload, força ele também
    if (slug) revalidatePath(`/blog/${slug}`, "page");

    // Página de links (singleton "links") — já coberta pelo layout, explícito por clareza
    revalidatePath("/links", "page");

    return NextResponse.json({ revalidated: true, slug });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
