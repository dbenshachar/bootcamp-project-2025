// Same code as milestone 1 but without function call

import connectDB from "@/database/db";
import BlogModel, { BlogDoc } from "@/database/models/blogEntry";
import mongoose from "mongoose";
import { BlogSchema } from "@/database/models/blogEntry";

export async function getBlogs() {
  try {
    await connectDB(); // function from db.ts before
    // query for all blogs and sort by date
    const res = await BlogModel.find().lean();
    return res;
  } catch (err: any) {
    return undefined;
  }
}

export function findBlog(slug: string) {
  return getBlogs().then((blogArray) => {
    if (blogArray === undefined) {
      return undefined;
    }

    return blogArray.find((blog) => blog.slug === slug);
  });
}
