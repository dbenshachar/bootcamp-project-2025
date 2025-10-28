// Same code as milestone 1 but without function call

type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

type Blog = {
  title: string;
  date: CalendarDate;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
  content: string;
};

const BlogArray: Blog[] = [
  {
    title: "Python Tutorial",
    date: { year: 2025, month: 10, day: 13 },
    description: "Tutorial for learning Python!",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1920px-Python-logo-notext.svg.png",
    imageAlt: "The logo for python",
    slug: "python-tutorial",
    content: "",
  },

  {
    title: "Why I love Volleyball",
    date: { year: 2025, month: 10, day: 13 },
    description: "Explaining my love for the sport",
    image:
      "https://media.istockphoto.com/id/1305166860/vector/volleyball-sports-glyph-icon.jpg?s=612x612&w=0&k=20&c=t67-m41qaiSnaOuWjLtkytN1RAqAiiXc9QmLu68fTS8=",
    imageAlt: "A logo for a volleyball",
    slug: "why-i-love-volleyball",
    content: "",
  },
];

export default BlogArray;
