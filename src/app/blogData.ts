// Same code as milestone 1 but without function call

import connectDB from "@/database/db";
import BlogModel from "@/database/models/blogEntry";
import CommentModel from "@/database/models/commentEntry";
import { CommentDoc } from "@/types/types";
import mongoose from "mongoose";

type SlugModel = { slug: string };

async function getModel<T>(model: mongoose.Model<T>) {
  try {
    await connectDB();
    return (await model.find().lean()) as T[];
  } catch {
    return undefined;
  }
}

async function findBySlug<T extends SlugModel>(
  modelPromise: Promise<T[] | undefined>,
  slug: string
) {
  const modelArray = await modelPromise;
  return modelArray?.find((doc) => doc.slug === slug);
}

async function filterBySlug<T extends SlugModel>(
  modelPromise: Promise<T[] | undefined>,
  slug: string
) {
  const modelArray = await modelPromise;
  return modelArray?.filter((doc) => doc.slug === slug);
}

export const getBlogs = () => getModel(BlogModel);
export const getComments = () => getModel(CommentModel);

export const findBlogs = (slug: string) => findBySlug(getBlogs(), slug);
export const findComments = (slug: string) => filterBySlug(getComments(), slug);

export async function addComment(commentData: CommentDoc) {
  try {
    await connectDB();
    const newComment = new CommentModel(commentData);
    const savedComment = await newComment.save();
    return savedComment;
  } catch (error) {
    return undefined;
  }
}
