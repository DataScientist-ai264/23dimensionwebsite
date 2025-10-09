// Contact form utility using Vercel direct email (no third-party services needed)
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
    // PRODUCTION: Use Vercel direct email API
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.error || `Failed to send email: ${response.status}`
        );
      }

      return {
        success: true,
        message:
          "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
      };
    } catch (error) {
      console.error("Form submission error:", error);
      throw new Error("Failed to send message. Please try again later.");
    }
  } else {
    // DEVELOPMENT: Log to console and simulate success
    console.log(
      "📧 Contact Form Submission (Development Mode - Direct Email):",
      {
        name: formData.name,
        organization: formData.organization,
        email: formData.email,
        message: formData.message,
        timestamp: new Date().toISOString(),
        note: "Direct email API will work when deployed to Vercel with environment variables.",
      }
    );

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      message:
        "Development mode: Direct email API will work when deployed to Vercel",
    };
  }
};
