import { Schema, model, models } from "mongoose";
import { DateStruct } from "./blogEntry";

export interface CommentDoc {
  content: string;
  date: DateStruct;
  user: string;
  slug: string;
}

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
