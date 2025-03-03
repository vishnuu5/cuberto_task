"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();

  const validateForm = () => {
    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_48v1751",
        "template_qws2ipn",
        formData,
        "yTCfmiwzaBr7mPNyf"
      );

      setSuccessMessage("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });

      
      setTimeout(() => {
        router.back();
      }, 2000); 
    } catch (error) {
      console.error("Email sending error:", error);
      setSuccessMessage("Failed to send message. Try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-2xl w-full px-6 py-12 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>

        {successMessage && (
          <p className="text-green-400 text-center mb-4">{successMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={`w-full p-3 rounded bg-gray-700 text-white ${
                errors.name && "border border-red-500"
              }`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className={`w-full p-3 rounded bg-gray-700 text-white ${
                errors.email && "border border-red-500"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className={`w-full p-3 rounded bg-gray-700 text-white ${
                errors.message && "border border-red-500"
              }`}
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
          </div>

          <Button
            type="submit"
            className="w-full bg-white text-black py-3 rounded"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
