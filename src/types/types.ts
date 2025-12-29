"use client";

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

export interface CommentDoc {
  content: string;
  date: DateStruct;
  user: string;
  slug: string;
}

export interface ProjectDoc {
  title: string;
  link: string;
  technologies: [string];
  date_range: {
    start: string;
    end: string;
  };
  bullets: [string];
}
