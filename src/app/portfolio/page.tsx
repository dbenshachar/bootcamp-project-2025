import Navbar from "@/components/navbar";
import { getPortfolio } from "../portfolioData";
import { SquareCircle } from "@/components/hero";
import Link from "next/link";

export default function Portfolio() {
  return getPortfolio().then((portfolioEntries) => {
    return (
      <html lang="en">
        <body>
          <title>Portfolio</title>
          <Navbar></Navbar>
          {portfolioEntries?.map((project, index) => (
            <Link href={project.link} key={index}>
              <SquareCircle
                header={project.title}
                bullets={project.bullets}
              ></SquareCircle>
            </Link>
          ))}
        </body>
      </html>
    );
  });
}
