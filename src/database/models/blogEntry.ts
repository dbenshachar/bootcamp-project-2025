// /database/models/Blog.ts
import { Schema, model, models } from "mongoose";
import { CommentSchema } from "./commentEntry";
import { BlogDoc, DateStruct } from "@/types/types";

export const getDate = (): DateStruct => {
  const date = new Date();
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
  };
};

export const BlogSchema = new Schema<BlogDoc>({
  title: { type: String, required: true },
  date: {
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
  },
  description: String,
  image: String,
  imageAlt: String,
  slug: { type: String, required: true, unique: true },
  content: String,
  comments: { type: [CommentSchema], default: [] },
});

const BlogModel =
  models.Blog || model<BlogDoc>("Blog", BlogSchema, "blogEntries");
export default BlogModel;
