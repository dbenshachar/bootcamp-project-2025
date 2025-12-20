import { NextRequest, NextResponse } from "next/server";
import { findComments, findBlogs } from "../../blogData";

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter is required." },
      { status: 404 }
    );
  }
  const blog = await findBlogs(slug);
  if (!blog) {
    return NextResponse.json(
      { error: "Slug is not an existing blog." },
      { status: 404 }
    );
  }
  return NextResponse.json({ comments: findComments(slug) });
}

export async function POST(request: NextRequest) {}

export async function PUT(request: NextRequest) {}
