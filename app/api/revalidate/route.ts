import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const type: string = body?._type ?? "";
    const slug: string = body?.slug?.current ?? "";

    if (type === "post") {
      revalidatePath("/blog");
      if (slug) revalidatePath(`/blog/${slug}`);
    } else {
      revalidatePath("/blog");
    }

    return NextResponse.json({ revalidated: true, type, slug });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
