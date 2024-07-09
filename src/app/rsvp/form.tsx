"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import styles from "./form.module.css";
import Link from "next/link";
import { Button } from "@mantine/core";

interface FormData {
  email: string;
  fullName: string;
  numberOfPeople: string;
}

const Form = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    numberOfPeople: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLScDUyZ-Qp4Z_Rs_pPe1UwbTzGDDFSWaUPHH_ijVdBiBdcyYkA/formResponse";
    const formBody = new URLSearchParams({
      "entry.1780199336": formData.email,
      "entry.1378719052": formData.fullName,
      "entry.1634956136": formData.numberOfPeople,
    });

    try {
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      window.location.href = "/rsvp-response";
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formContainer}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={styles.input}
          placeholder="example@gmail.com"
          required
        />
      </div>
      <div className={styles.formContainer}>
        <label htmlFor="fullName" className={styles.label}>
          Your Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className={styles.input}
          placeholder="Max Mustermann"
          required
        />
      </div>
      <div className={styles.formContainer}>
        <label htmlFor="numberOfPeople" className={styles.label}>
          How many people are coming to the concert (including yourself)?:
        </label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          className={styles.input}
          placeholder="2"
          required
        />
      </div>
      <button type="submit" className={styles.button}>
        Submit
      </button>
    </form>
  );
};

export default Form;
