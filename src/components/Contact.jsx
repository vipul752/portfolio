import React, { useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Mail, Linkedin, Github } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Memoized Input Field Component
const InputField = React.memo(
  ({
    label,
    name,
    type = "text",
    placeholder,
    multiline = false,
    delay,
    value,
    onChange,
  }) => (
    <motion.div
      className="space-y-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <label className="text-sm font-semibold text-gray-800">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows="5"
          className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300/60 text-gray-900 placeholder-gray-500 focus:border-blue-500/60 focus:bg-white/85 focus:outline-none transition-all duration-300 resize-none shadow-sm"
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl bg-white/70 border border-gray-300/60 text-gray-900 placeholder-gray-500 focus:border-blue-500/60 focus:bg-white/85 focus:outline-none transition-all duration-300 shadow-sm"
        />
      )}
    </motion.div>
  )
);

InputField.displayName = "InputField";

const ContactSection = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.user_name.trim() ||
      !formData.user_email.trim() ||
      !formData.message.trim()
    ) {
      toast.error("Please fill in all fields", {
        className: "bg-red-500/20 border border-red-500/50 text-white",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.user_email)) {
      toast.error("Please enter a valid email", {
        className: "bg-red-500/20 border border-red-500/50 text-white",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID || "service_4myfzwk",
        process.env.REACT_APP_TEMPLATE_ID || "template_1qpmm0l",
        form.current,
        process.env.REACT_APP_PUBLIC_KEY || "QJQYkebsPCG96zFxc"
      );

      toast.success("Message sent successfully! 🎉", {
        className: "bg-green-500/20 border border-green-500/50 text-white",
      });

      setFormData({ user_name: "", user_email: "", message: "" });
      form.current.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.", {
        className: "bg-red-500/20 border border-red-500/50 text-white",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    { icon: Github, label: "GitHub", url: "https://github.com/vipul752" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/vipul-kumar-990904282/",
    },
    { icon: Mail, label: "Email", url: "mailto:your.email@example.com" },
  ];

  return (
    <section
      id="contact"
      className="relative py-32 px-8 bg-gradient-to-b from-slate-50 via-white to-purple-50/60 overflow-hidden"
    >
      {/* Background Animations */}
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/25 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-tr from-purple-200/20 to-transparent rounded-full blur-3xl"
        animate={{ x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700 text-lg">
            Have a project in mind? Let's collaborate and build something
            amazing together.
          </p>
        </motion.div>

        {/* Contact Container */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Links */}
          {contactLinks.map((link, idx) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-300/50 hover:border-gray-400/70 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -12,
                  backgroundColor: "rgba(255,255,255,0.95)",
                }}
              >
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-120 transition-transform shadow-md"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <h3 className="font-semibold text-gray-900 mb-1 text-lg">
                  {link.label}
                </h3>
                <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                  Get in touch
                </p>
              </motion.a>
            );
          })}
        </div>

        {/* Contact Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="p-8 md:p-10 rounded-2xl bg-white/80 backdrop-blur-lg border border-gray-300/50 hover:border-gray-400/60 transition-all duration-300 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Form Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-8">
            Send me a message
          </h3>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="Your Name"
                name="user_name"
                placeholder="John Doe"
                delay={0.3}
                value={formData.user_name}
                onChange={handleChange}
              />
              <InputField
                label="Your Email"
                name="user_email"
                type="email"
                placeholder="john@example.com"
                delay={0.35}
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>

            <InputField
              label="Message"
              name="message"
              placeholder="Tell me about your project..."
              multiline
              delay={0.4}
              value={formData.message}
              onChange={handleChange}
            />

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-white overflow-hidden hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </>
                  )}
                </span>
              </motion.button>
            </motion.div>
          </div>

          {/* Form Info */}
          <motion.p
            className="text-xs text-gray-600 text-center mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            I'll get back to you as soon as possible. Usually within 24 hours.
          </motion.p>
        </motion.form>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </section>
  );
};

export default ContactSection;
