import { CommentDoc } from "@/types/types";
import { Schema, model, models } from "mongoose";

export const CommentSchema = new Schema<CommentDoc>({
  date: {
    year: { type: Number, required: true },
    month: { type: Number, required: true },
    day: { type: Number, required: true },
  },
  user: String,
  content: String,
  slug: String,
});

const CommentModel =
  models.Comment ||
  model<CommentDoc>("Comment", CommentSchema, "commentEntries");
export default CommentModel;
