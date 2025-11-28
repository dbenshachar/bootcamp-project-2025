// /database/models/Blog.ts
import { Schema, model, models } from "mongoose";
import { CommentDoc, CommentSchema } from "./commentEntry";

export interface DateStruct {
  year: number;
  month: number;
  day: number;
}

export interface BlogDoc {
  title: string;
  date: DateStruct;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
  comments: CommentDoc[];
}

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
