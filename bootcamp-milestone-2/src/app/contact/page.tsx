import { Form, FormProps } from "@/components/form";
import Navbar from "@/components/navbar";

const props: FormProps = {
  header: "Contact Me",
  questions: [
    "Enter your email address",
    "Enter the message you would like to send",
  ],
};

export default function Contact() {
  return (
    <html lang="en">
      <body>
        <title>Blogs</title>
        <Navbar></Navbar>
        <main>
          <Form header={props.header} questions={props.questions}></Form>
        </main>
      </body>
    </html>
  );
}
