import { NextRequest, NextResponse } from "next/server";
import { findComments, findBlogs, addComment } from "../../blogData";
import { DateStruct } from "../../../database/models/blogEntry";

const getDate = (): DateStruct => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export async function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json({
      error: "Slug parameter is required.",
      status: 404,
    });
  }
  const blog = await findBlogs(slug);
  if (!blog) {
    return NextResponse.json({
      error: `'${slug}' slug is not an existing blog.`,
      status: 404,
    });
  }

  const comments = await findComments(slug);
  return NextResponse.json({ comments: comments, status: 201 });
}

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const content = searchParams.get("content");
  const user = searchParams.get("user");
  const slug = searchParams.get("slug");
  const date = getDate();

  if (!content || !user || !slug) {
    return NextResponse.json(
      { error: "Content, user, and slug parameter are required." },
      { status: 404 }
    );
  }

  const response = await addComment({
    content: content,
    user: user,
    date: date,
    slug: slug,
  });
  if (!response) {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }

  return NextResponse.json({ status: 201 });
}

export async function PUT(request: NextRequest) {}
