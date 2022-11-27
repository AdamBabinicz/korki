import React from "react";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./style.scss";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send(
      "service_wan04y9",
      "template_dw6nnyq",
      data,
      "user_yESYTXvq2eaUzMYTx9oxz"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const formSuccess = () => {
    toast("Dziękuję za przesłanie zapytania!");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="query-form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <input
            type="text"
            name="from_name"
            placeholder="Imię i Nazwisko lub Nick"
            {...register("from_name", {
              required: "Pole jest wymagane",
            })}
          />
          {errors.from_name?.message && (
            <p className="errors">{errors.from_name?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Pole jest wymagane",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Niepoprawny adres email",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="errors">{errors.reply_to?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="phone_number"
            placeholder="Telefon"
            {...register("phone_number", {
              required: "Pole jest wymagane",
              minLength: {
                value: 8,
                message: "Numer telefonu jest nieprawidłowy",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="errors">{errors.phone_number?.message}</p>
          )}
        </div>

        <div className="input-field">
          <input
            type="text"
            name="subject"
            placeholder="Temat"
            {...register("subject", {
              required: "Pole jest wymagane",
              minLength: {
                value: 5,
                message: "Wymagane minimum 5 znaków",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="errors">{errors.subject?.message}</p>
          )}
        </div>

        <div className="input-field full-width">
          <textarea
            className="textarea"
            name="message"
            placeholder="Twoje pytanie"
            {...register("message", {
              required: "Pole jest wymagane",
              minLength: {
                value: 10,
                message: "Wymagane minimum 10 znaków",
              },
              maxLength: {
                value: 500,
                message: "Dozwolone maksymalnie 500 znaków",
              },
            })}
          />
          {errors.message?.message && (
            <p className="errors">{errors.message?.message}</p>
          )}
        </div>

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default Form;
