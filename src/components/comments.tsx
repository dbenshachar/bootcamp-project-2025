"use client";

import { CommentDoc } from "@/types/types";
import style from "./comments.module.css";
import { useEffect, useState } from "react";

export interface CommentsProps {
  slug: string;
}

export default function Comments(props: CommentsProps) {
  const [comments, setComments] = useState<CommentDoc[]>([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [posting, setPosting] = useState(false);

  const [user, setUser] = useState("");
  const [content, setContent] = useState("");

  async function loadComments() {
    if (!props.slug) return;
    setLoading(true);
    setError(null);
    try {
      const url = `/api/comments?slug=${encodeURIComponent(props.slug)}`;
      const res = await fetch(url, { method: "GET", cache: "no-store" });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "Failed to load comments.");
      }

      setComments(Array.isArray(data?.comments) ? data.comments : []);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load comments.");
    } finally {
      setLoading(false);
    }
  }

  async function postComment(e: React.FormEvent) {
    e.preventDefault();
    if (!props.slug) return;
    setPosting(true);
    try {
      const url = `"/api/comments"?slug=${encodeURIComponent(props.slug)}`;
      const params = new URLSearchParams({
        slug: props.slug,
        user: user.trim(),
        content: content.trim(),
      });

      const res = await fetch(`/api/comments?${params.toString()}`, {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error ?? "Failed to post comment.");
      }
      setContent("");
      await loadComments();
    } catch (e: any) {
      setError(e?.message ?? "Failed to post comment.");
    } finally {
      setPosting(false);
    }
  }

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <div className={style.commentContainer}>
      <h2>Comments</h2>
      <form className={style.formContainer} onSubmit={postComment}>
        <label className={style.labelContainer}>
          Your name
          <input
            className={style.inputContainer}
            value={user}
            onChange={(e) => setUser(e.target.value)}
            placeholder="Jane Doe"
            autoComplete="name"
          />
        </label>

        <label className={style.labelContainer}>
          Message
          <textarea
            className={style.textContainer}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment…"
            rows={4}
          />
        </label>

        <button
          className={style.buttonContainer}
          type="submit"
          disabled={posting}
        >
          {posting ? "Posting..." : "Post"}
        </button>

        {error && <p className={style.errorText}>{error}</p>}
      </form>

      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments yet.</p>
      ) : (
        <ul className={style.commentList}>
          {comments.map((comment, index) => (
            <li key={index} className={style.commentPoint}>
              {comment.content}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
