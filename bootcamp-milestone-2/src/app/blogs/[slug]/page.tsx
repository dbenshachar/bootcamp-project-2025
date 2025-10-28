import Navbar from "@/components/navbar";
import { findBlog } from "../../blogData";
import { SquareCircle } from "@/components/hero";

export interface blogPageProps {
  title: string;
  description: string;
  content: string;
  image: string;
}

/**Generates the blog article to allow dynamic articles with slugs. */
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const props = findBlog(slug);
  if (props === undefined) {
    return;
  }

  return (
    <div>
      <Navbar></Navbar>
      <SquareCircle
        header={props.description}
        content={props.content}
        imagePath={props.image}
      ></SquareCircle>
    </div>
  );
}
