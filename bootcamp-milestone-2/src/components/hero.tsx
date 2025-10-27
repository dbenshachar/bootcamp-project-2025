import style from "./hero.module.css";

export interface SquareCircleProps {
  header: string;
  content: string;
  bullets?: string[];
}

export function SquareCircle(props: SquareCircleProps) {
  return (
    <div className={style.hero}>
      <main className={style.square_circle}>
        <h1 className={style.header}>{props.header}</h1>
        <p className={style.paragraph}>{props.content}</p>

        <ul className={style.ul}>
          {props.bullets?.map((content, index) => (
            <li key={index} className={style.li}>
              {content}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
