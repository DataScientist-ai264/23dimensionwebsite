// Contact form utility using Formspree for static form handling
export const submitContactForm = async (formData: {
  name: string;
  organization: string;
  email: string;
  message: string;
}) => {
  // Basic validation
  if (!formData.name || !formData.email || !formData.message) {
    throw new Error("Missing required fields");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error("Invalid email format");
  }

  // Check if we're in production (deployed) or development
  const isProduction =
    window.location.hostname !== "localhost" &&
    window.location.hostname !== "127.0.0.1";

  if (isProduction) {
    // PRODUCTION: Use Formspree
    try {
      const formspreeEndpoint = "https://formspree.io/f/xzzjanpq";

      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          organization: formData.organization,
          message: formData.message,
          _subject: `New contact from ${formData.name} - 2+3Dimension`,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to submit form: ${response.status}`);
      }

      return {
        success: true,
        message: "Thank you! Your message has been sent successfully.",
      };
    } catch (error) {
      console.error("Form submission error:", error);
      throw new Error("Failed to send message. Please try again.");
    }
  } else {
    // DEVELOPMENT: Log to console and simulate success (no Formspree submission)
    console.log(
      "🚀 Contact Form Submission (Development Mode - Formspree DISABLED):",
      {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        note: "This is a development test. Formspree will work when deployed to Vercel.",
      }
    );

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        "Development mode: Form logged to console (Formspree will work when deployed)",
    };
  }
};
