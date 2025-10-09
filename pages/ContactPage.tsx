import React, { useState } from "react";
import PageContainer, { FadeIn } from "../components/PageContainer";
import { submitContactForm } from "../utils/contactForm";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const result = await submitContactForm(formData);
      setStatus("success");
      setFormData({ name: "", organization: "", email: "", message: "" });
      console.log("Form submission successful:", result);
    } catch (error) {
      setStatus("error");
      console.error("Form submission failed:", error);
    }
  };

  const inputClasses =
    "mt-1 block w-full bg-surface border-border rounded-lg shadow-sm py-2 px-3 text-text focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-accent-cyan transition-colors";

  return (
    <PageContainer>
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-[clamp(40px,4.5vw,56px)] font-bold tracking-tight text-text font-serif">
              Start the Conversation
            </h1>
            <p className="mt-6 text-lg leading-8 text-text-secondary">
              We invite you to discuss your strategic and technical challenges.
              All inquiries are treated with the strictest confidence.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay="delay-200">
          <div className="mt-16">
            {status === "success" ? (
              <div
                role="status"
                className="text-center p-8 border border-green-500/50 bg-green-500/10 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-text">Thank You</h3>
                <p className="mt-2 text-text-secondary">
                  Your message has been received. We will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-secondary"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="organization"
                      className="block text-sm font-medium text-text-secondary"
                    >
                      Organization
                    </label>
                    <input
                      type="text"
                      name="organization"
                      id="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-secondary"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-secondary"
                  >
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClasses}
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-background bg-accent-gold hover:bg-accent-gold/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background focus:ring-accent-gold disabled:bg-text-secondary disabled:cursor-not-allowed transition-colors"
                  >
                    {status === "sending" ? "Sending..." : "Send Inquiry"}
                  </button>
                </div>
                {status === "error" && (
                  <p role="status" className="text-red-400 text-sm text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </PageContainer>
  );
};

export default ContactPage;
