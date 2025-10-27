import Navbar from "@/components/navbar";
import path from "path";
import { SquareCircle, SquareCircleProps } from "@/components/hero";

const aboutMeProps: SquareCircleProps = {
  header: "About Me",
  content:
    "I am a first year CS student @ Cal Poly SLO excited to learn about AI and full stack development.\n\nMy hobbies include:",
  bullets: [
    "Learning frontend development (I'm still learning).",
    "Playing volleyball with my friends.",
    "Drinking boba tea.",
  ],
  imagePath: "/profile.jpeg",
};

export default function Home() {
  return (
    <html lang="en">
      <body>
        <title>Home</title>
        <Navbar></Navbar>
        <main>
          <SquareCircle
            header={aboutMeProps.header}
            content={aboutMeProps.content}
            bullets={aboutMeProps.bullets}
            imagePath={aboutMeProps.imagePath}
          ></SquareCircle>
        </main>
      </body>
    </html>
  );
}
