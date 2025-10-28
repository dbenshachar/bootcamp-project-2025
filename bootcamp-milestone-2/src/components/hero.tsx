import style from "./hero.module.css";

export interface SquareCircleProps {
  header?: string;
  content?: string;
  bullets?: string[];
  imagePath?: string;
}

/**Square circle is a UI element that has text with a square-circle border next to an image with a similar border. */
export function SquareCircle(props: SquareCircleProps) {
  return (
    <div className={style.hero}>
      <main className={style.square_circle}>
        <h1 className={style.header}>{props.header}</h1>
        <p className={style.paragraph}>{props.content}</p>

        {/**For each bullet point in the props, add the bullet point to the square-circle */}
        <ul className={style.ul}>
          {props.bullets?.map((content, index) => (
            <li key={index} className={style.li}>
              {content}
            </li>
          ))}
        </ul>
      </main>
      <div className={style.image_hero}>
        <figure className={style.figure}>
          <img
            src={props.imagePath}
            className={style.img}
            alt={props.header}
          ></img>
        </figure>
      </div>
    </div>
  );
}
