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
  },

  {
    title: "Why I love Volleyball",
    date: { year: 2025, month: 10, day: 13 },
    description: "Explaining my love for the sport",
    image:
      "https://media.istockphoto.com/id/1305166860/vector/volleyball-sports-glyph-icon.jpg?s=612x612&w=0&k=20&c=t67-m41qaiSnaOuWjLtkytN1RAqAiiXc9QmLu68fTS8=",
    imageAlt: "A logo for a volleyball",
    slug: "why-i-love-volleyball",
  },
];

function appendBlogs() {
  // Set variable to the container in blogs.html where the blogs will be stored.
  const blogContainer = document.getElementById("blog-container");

  BlogArray.forEach((blog) => {
    // Generate the HTML of the preview of each blog in the array of blogs we want to generate.
    const main = document.createElement("main");

    const hero = document.createElement("section");
    hero.classList.add("hero");

    const styleDiv = document.createElement("div");
    styleDiv.classList.add("square-circle");

    const title = document.createElement("h3");
    const link = document.createElement("a");
    link.textContent = blog.title;
    const slug = blog.slug;
    link.href = "blogs/" + slug + ".html";
    link.style.color = "black";
    // Create title and have it be the link to the blog page by giving a child with the href
    title.appendChild(link);

    const description = document.createElement("p");
    description.textContent = blog.description;

    const figure = document.createElement("figure");
    figure.classList.add("photo-squircle");

    const image = document.createElement("img");
    // Set the height and width of image to not bloat the screen
    image.style.height = "140px";
    image.style.width = "auto";
    image.src = blog.image;
    image.alt = blog.imageAlt;

    // Manipulate DOM by:
    // >Appending image to the figure
    // >Appending description to the square circle styleDiv
    // >Appending the image, styleDiv, and title in the hero style
    // >Append the hero to the main section and and appending the final HTML document to the blogContainer
    figure.appendChild(image);

    styleDiv.appendChild(description);

    hero.appendChild(title);
    hero.appendChild(styleDiv);
    hero.append(figure);
    main.appendChild(hero);
    blogContainer?.appendChild(main);
  });
}

appendBlogs();
