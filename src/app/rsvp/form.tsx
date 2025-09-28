"use client";

import { useState, useRef, ChangeEvent, FormEvent } from "react";
import styles from "./form.module.css";

interface FormData {
  email: string;
  fullName: string;
  numberOfPeople: string;
  invitedBy: string;
}

const Form = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    numberOfPeople: "",
    invitedBy: "",
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isSubmittingRef = useRef(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;
    setIsSubmitting(true);

    setErrorMessage(null);

    const formUrl =
      "https://docs.google.com/forms/d/e/1FAIpQLSdazqu6LDLfv2PeEdXDXuU7i99Xb-TjQqSl4rb9Y0-zrbayPA/formResponse";

    const formBody = new URLSearchParams({
      "entry.1780199336": formData.email,
      "entry.1378719052": formData.fullName,
      "entry.1634956136": formData.numberOfPeople,
      "entry.1928734284": formData.invitedBy,
    });

    try {
      // Send to Google Sheet
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody.toString(),
      });

      // Send confirmation email
      const emailResponse = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: formData.email }),
      });

      // Google Ads conversion tracking
      if (typeof window !== "undefined") {
        (window as any).gtag("event", "conversion", {
          send_to: "AW-16765503652/LQjWCKOj4oYbEKSRtbo-",
        });
      }

      // Handle email response
      if (emailResponse.ok) {
        window.location.href = "/rsvp-response";
      } else {
        const errorData = await emailResponse.json();
        setErrorMessage(
          errorData.message || "Failed to submit form. Please check your data."
        );
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setErrorMessage("An unexpected error occurred. Please check your data.");
    } finally {
      isSubmittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formContainer}>
        <label htmlFor="email" className={styles.label}>
          Email
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
          Your Full Name
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
          How many people are coming to the concert (including yourself)?
        </label>
        <input
          type="number"
          id="numberOfPeople"
          name="numberOfPeople"
          value={formData.numberOfPeople}
          onChange={handleChange}
          className={styles.input}
          placeholder="2"
          min={1}
          max={15}
          required
        />
      </div>

      <div className={styles.formContainer}>
        <label htmlFor="invitedBy" className={styles.label}>
          How did you know about this event?
        </label>
        <select
          id="invitedBy"
          name="invitedBy"
          value={formData.invitedBy}
          onChange={handleChange}
          className={styles.input}
          required
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="Friend's invitation">Friend&rsquo;s Invitation</option>
          <option value="Instagram">Instagram</option>
          <option value="Facebook">Facebook</option>
          <option value="Poster">Poster</option>
          <option value="Google">Google</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </form>
  );
};

export default Form;
