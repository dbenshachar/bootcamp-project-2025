import { CommentDoc } from "@/database/models/commentEntry";
import style from "./comments.module.css";

export interface CommentsProps {
  comments: CommentDoc[];
}

export default function Comments(props: CommentsProps) {
  return (
    <div className={style.commentContainer}>
      <h2>Comments</h2>
      {props.comments.map((comment) => 1)}
    </div>
  );
}
