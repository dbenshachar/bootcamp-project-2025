"use client";

import { useState } from "react";
import style from "./form.module.css";

export interface FormProps {
  header: string;
  questions: string[];
}

/**UI element for users to enter information into questions.*/
export function Form(props: FormProps) {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    name: "",
    email: "",
    message: "",
  });

  /**Allows user entries to the forms to remain. */
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  /**Removes all information from form on submit press. */
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setFormData({ name: "", email: "", message: "" });
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
          Submit
        </button>
      </form>
    </div>
  );
}
