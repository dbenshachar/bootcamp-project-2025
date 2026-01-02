"use client";

import { useState, useEffect } from "react";
import style from "./form.module.css";
import emailjs from "@emailjs/browser";

const service_id: string = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string;
const template_id: string = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string;
const public_key: string = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string;

export interface FormProps {
  header: string;
  questions: string[];
}

/**UI element for users to enter information into questions.*/
export function Form(props: FormProps) {
  useEffect(() => {
    emailjs.init({ publicKey: public_key });
  }, []);
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("Submit");

  /**Allows user entries to the forms to remain. */
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  /**Removes all information from form on submit press. */
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await emailjs.send(service_id, template_id, {
        name: formData["name"],
        email: formData["email"],
        message: formData["message"],
        title: "Contact us",
        time: new Date().toISOString(),
      });
      setFormData({ name: "", email: "", message: "" });

      setMessage("Success");
    } catch (e: any) {
      setMessage(e?.message ?? "Failed to send email");
    } finally {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setMessage("Submit");
    }
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <h2 className={style.header}>{props.header}</h2>

        {/**Creates a text area for each question in props. */}
        {props.questions.map((question) => (
          <div key={question}>
            <textarea
              name={question}
              value={formData[question] || ""}
              onChange={handleChange}
              placeholder={question}
              className={style.input_box}
            />
          </div>
        ))}

        <button type="submit" className={style.submit_button}>
          {message}
        </button>
      </form>
    </div>
  );
}
