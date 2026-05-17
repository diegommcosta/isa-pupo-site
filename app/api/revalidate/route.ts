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

    // Revalida tudo que depende de posts: home, /blog e todos os /blog/[slug]
    revalidatePath("/", "layout");

    // Se o slug estiver disponível, força o post específico também
    if (slug) revalidatePath(`/blog/${slug}`, "page");

    return NextResponse.json({ revalidated: true, slug });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
