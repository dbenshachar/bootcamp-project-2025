import style from "./resume.module.css";

export interface PDFProps {
  resumePath: string;
}

/**Displays the PDF in full screen view. */
export function PDFView(props: PDFProps) {
  return (
    <div className={style.pdf_view}>
      <iframe
        className={style.resume}
        src={props.resumePath + "#view=FitH"}
        allow="fullscreen"
      ></iframe>
    </div>
  );
}
