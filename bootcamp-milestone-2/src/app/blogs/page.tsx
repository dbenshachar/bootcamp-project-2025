import Navbar from "@/components/navbar";
import BlogArray from "../blogData";
import { SquareCircle } from "@/components/hero";

export default function Blogs() {
  return (
    <html lang="en">
      <body>
        <title>Blogs</title>
        <Navbar></Navbar>
        {BlogArray.map((blog, index) => (
          <SquareCircle
            header={blog.title}
            content={blog.description}
            imagePath={blog.image}
          ></SquareCircle>
        ))}
      </body>
    </html>
  );
}
