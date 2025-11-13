import Navbar from "@/components/navbar";
import { SquareCircle } from "@/components/hero";
import Link from "next/link";
import { getBlogs } from "../blogData";

/**Shows previews of blogs and dynamically creates each blog when clicked. */
export default function Blogs() {
  return getBlogs().then((blogArray) => {
    return (
      <html lang="en">
        <body>
          <title>Blogs</title>
          <Navbar></Navbar>
          {/**Creates link to blog article for each blog in blog array.*/}
          {blogArray?.map((blog, index) => (
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
  });
}
