import Navbar from "@/components/navbar";
import BlogArray from "../blogData";
import { SquareCircle } from "@/components/hero";
import Link from "next/link";

/**Shows previews of blogs and dynamically creates each blog when clicked. */
export default function Blogs() {
  return (
    <html lang="en">
      <body>
        <title>Blogs</title>
        <Navbar></Navbar>
        {/**Creates link to blog article for each blog in blog array.*/}
        {BlogArray.map((blog, index) => (
          <Link href={`/blogs/${blog.slug}`} key={index}>
            <SquareCircle
              header={blog.title}
              content={blog.description}
              imagePath={blog.image}
            ></SquareCircle>
          </Link>
        ))}
      </body>
    </html>
  );
}
