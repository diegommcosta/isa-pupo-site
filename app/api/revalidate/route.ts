import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const slug: string = body?.slug?.current ?? "";

    // Invalida cache de rota de todo o site
    revalidatePath("/", "layout");

    // Força o post específico também se o slug vier no body
    if (slug) revalidatePath(`/blog/${slug}`, "page");

    return NextResponse.json({ revalidated: true, slug });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
