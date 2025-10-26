var BlogArray = [
    {
        title: "Python Tutorial",
        date: { year: 2025, month: 10, day: 13 },
        description: "Tutorial for learning Python!",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1920px-Python-logo-notext.svg.png",
        imageAlt: "The logo for python",
        slug: "python-tutorial",
    },
    {
        title: "Why I love Volleyball",
        date: { year: 2025, month: 10, day: 13 },
        description: "Explaining my love for the sport",
        image: "https://media.istockphoto.com/id/1305166860/vector/volleyball-sports-glyph-icon.jpg?s=612x612&w=0&k=20&c=t67-m41qaiSnaOuWjLtkytN1RAqAiiXc9QmLu68fTS8=",
        imageAlt: "A logo for a volleyball",
        slug: "why-i-love-volleyball",
    },
];
function appendBlogs() {
    var blogContainer = document.getElementById("blog-container");
    BlogArray.forEach(function (blog) {
        var main = document.createElement("main");
        var hero = document.createElement("section");
        hero.classList.add("hero");
        var styleDiv = document.createElement("div");
        styleDiv.classList.add("square-circle");
        var title = document.createElement("h3");
        var link = document.createElement("a");
        link.textContent = blog.title;
        var slug = blog.slug;
        link.href = "blogs/" + slug + ".html";
        link.style.color = "black";
        title.appendChild(link);
        var description = document.createElement("p");
        description.textContent = blog.description;
        var figure = document.createElement("figure");
        figure.classList.add("photo-squircle");
        var image = document.createElement("img");
        image.style.height = "140px";
        image.style.width = "auto";
        image.src = blog.image;
        image.alt = blog.imageAlt;
        figure.appendChild(image);
        styleDiv.appendChild(description);
        hero.appendChild(title);
        hero.appendChild(styleDiv);
        hero.append(figure);
        main.appendChild(hero);
        blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(main);
    });
}
appendBlogs();
