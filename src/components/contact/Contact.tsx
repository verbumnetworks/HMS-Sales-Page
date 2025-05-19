"use client";
import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import Button from "../btn/Button";

const Contact: FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log(formData);

    try {
      await fetch(process.env.NEXT_PUBLIC_FormLink as string, {
        method: "POST",
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.log(error);
    }
    setFormData({
      message: "",
      name: "",
      email: "",
    });
    // e.currentTarget.submit(); // Actually submit the form
    setLoading(false);
  };

  return (
    <section id="contact" className="my-8 px-6">
      <form className="max-w-xl mx-auto space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide mb-4 bg font-bold">
          Contact Us
        </h2>
        <p className="text-center text-color">
          Simply request a demo today, and within 24 hours, {"you'll"} receive
          full access to explore all the features and benefits we offer.
          Experience it firsthand!
        </p>

        <input
          type="text"
          name="name"
          required
          placeholder="Your Name"
          className="w-full p-3 border rounded"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your Email"
          className="w-full p-3 border rounded"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Your Message"
          className="w-full p-3 border rounded"
        ></textarea>
        <Button
          label="Send Message"
          variant="primary"
          loading={loading}
          type="submit"
          className="cursor-pointer"
        />
      </form>
    </section>
  );
};

export default Contact;
