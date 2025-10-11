import { useState } from "react";
import GlowCard from "../components/GlowCard";
import Section from "../components/Section";
import emailjs from '@emailjs/browser';
interface FieldStates {
  from_name?: "valid" | "invalid" | null;
  from_email?: "valid" | "invalid" | null;
  message?: "valid" | "invalid" | null;
}
const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');
    const [fieldStates, setFieldStates] = useState<FieldStates>({});
    const validateField = (name, value) => {
        switch (name) {
          case "from_name":
            return value.trim().length > 0;
          case "from_email":
            return /\S+@\S+\.\S+/.test(value);
          case "message":
            return value.trim().length > 0;
          default:
            return false;
        }
    }
    const handleFieldValidation = (e) => {
        const {name, value} = e.target;
        const isValid = validateField(name, value);

        setFieldStates((prev) => ({
          ...prev,
          [name]: value ? (isValid ? "valid" : "invalid") : null,
        }));
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');
        try{
            await emailjs.sendForm(
                'service_2958k9a','template_hwwq3v8',e.target, 'XVWQYqPxslotDw8Qj'
            );
            setMessage('Message sent successfully! I\'ll get back to you soon.');
            e.target.reset();
        }
        catch(error){
            console.log('EmailJS error: ', error);
            setMessage("Failed to send message. Please try again.");
        }

        setIsSubmitting(false);
    };


  return (
    <Section id="contact">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Contact <span className="text-yellow-400">Me</span>
      </h2>
      <div className="max-w-xl mx-auto">
        <GlowCard>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <label
                htmlFor="from_name"
                className="block text-sm font-medium text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                onChange={handleFieldValidation}
                onBlur={handleFieldValidation}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />
              {/* Validation Icons */}
              {fieldStates.from_name === "valid" && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {fieldStates.from_name === "invalid" && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6">
                  <svg
                    className="h-5 w-5 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="from_email"
                className="block text-sm font-medium text-gray-300"
              >
                Email Address
              </label>
              <input
                type="email"
                name="from_email"
                id="from_email"
                required
                onBlur={handleFieldValidation}
                onChange={handleFieldValidation}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              />

              {/* Same validation icons as above */}
              {fieldStates.from_email === "valid" && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {fieldStates.from_email === "invalid" && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pt-6">
                  <svg
                    className="h-5 w-5 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div className="relative">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                onBlur={handleFieldValidation}
                onChange={handleFieldValidation}
                className="mt-1 block w-full bg-gray-800 border-gray-700 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-yellow-400 focus:border-yellow-400"
              ></textarea>
              {/* For textarea, position icon at top-right */}
              {fieldStates.message === "valid" && (
                <div className="absolute top-6 right-0 pr-3 pt-2">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}

              {fieldStates.message === "invalid" && (
                <div className="absolute top-6 right-0 pr-3 pt-2">
                  <svg
                    className="h-5 w-5 text-red-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] transform hover:scale-105"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {message && (
              <p
                className={`text-center ${
                  message.includes("successfully")
                    ? "text-green-400"
                    : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </GlowCard>
      </div>
    </Section>
  );
};

export default Contact;
