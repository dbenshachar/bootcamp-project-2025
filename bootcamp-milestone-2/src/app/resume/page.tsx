import Navbar from "@/components/navbar";
import { PDFProps, PDFView } from "@/components/resume";

const props: PDFProps = {
  resumePath: "david_benshachar_resume.pdf",
};

/**Displays resume in full screen view with navbar. */
export default function Resume() {
  return (
    <html lang="en">
      <body>
        <title>Resume</title>
        <main>
          <Navbar></Navbar>
          <PDFView resumePath={props.resumePath}></PDFView>
        </main>
      </body>
    </html>
  );
}
