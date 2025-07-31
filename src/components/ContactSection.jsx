import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Button from "./ButtonAllPurple";
import { useInView } from "react-intersection-observer";

const serviceId = "service_3cck3s6";
const templateId = "template_xwq40df";
const publicKey = "uVXdxc_nUznzm6N3X";

const ContactForm = ({ language = "pt" }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const translations = {
    pt: {
      title: "Vamos construir algo incrível <span class='text-purple-600 dark:text-purple-300'>JUNTOS</span>?",
      description: "Envie sua proposta e entraremos em contato o mais breve possível.",
      labels: {
        fullName: "Nome Completo",
        phone: "Telefone",
        email: "E-mail",
        subject: "Assunto",
        message: "Sua Mensagem",
      },
      placeholders: {
        fullName: "Seu nome completo",
        phone: "(DD) 9XXXX-XXXX ou (DD) XXXX-XXXX",
        email: "seuemail@exemplo.com",
        subject: "Qual é o assunto?",
        message: "Escreva sua mensagem aqui...",
      },
      errors: {
        required: "Preencha este campo",
        invalidPhone: "Número de telefone inválido",
      },
      button: {
        submit: "ENVIAR MENSAGEM",
        sending: "Enviando...",
      },
      success: {
        title: "Mensagem enviada com sucesso!",
        message: "Entraremos em contato o mais breve possível.",
        button: "Entendido, obrigado!",
      },
      error: {
        title: "Erro ao enviar mensagem!",
        message: "Por favor, tente novamente mais tarde.",
        button: "Entendido, obrigado!",
      },
    },
    es: {
      title: "¿Vamos a construir algo increíble <span class='text-purple-600 dark:text-purple-300'>JUNTOS</span>?",
      description: "Envía tu propuesta y nos pondremos en contacto lo antes posible.",
      labels: {
        fullName: "Nombre Completo",
        phone: "Teléfono",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Tu Mensaje",
      },
      placeholders: {
        fullName: "Tu nombre completo",
        phone: "(DD) 9XXXX-XXXX o (DD) XXXX-XXXX",
        email: "tucorreo@ejemplo.com",
        subject: "¿Cuál es el asunto?",
        message: "Escribe tu mensaje aquí...",
      },
      errors: {
        required: "Completa este campo",
        invalidPhone: "Número de teléfono inválido",
      },
      button: {
        submit: "ENVIAR MENSAJE",
        sending: "Enviando...",
      },
      success: {
        title: "¡Mensaje enviado con éxito!",
        message: "Nos pondremos en contacto lo antes posible.",
        button: "Entendido, ¡gracias!",
      },
      error: {
        title: "¡Error al enviar el mensaje!",
        message: "Por favor, inténtalo de nuevo más tarde.",
        button: "Entendido, ¡gracias!",
      },
    },
    en: {
      title: "Let's build something amazing <span class='text-purple-600 dark:text-purple-300'>TOGETHER</span>?",
      description: "Send your proposal and we'll get back to you as soon as possible.",
      labels: {
        fullName: "Full Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Your Message",
      },
      placeholders: {
        fullName: "Your full name",
        phone: "(DD) 9XXXX-XXXX or (DD) XXXX-XXXX",
        email: "youremail@example.com",
        subject: "What's the subject?",
        message: "Write your message here...",
      },
      errors: {
        required: "Fill this field",
        invalidPhone: "Invalid phone number",
      },
      button: {
        submit: "SEND MESSAGE",
        sending: "Sending...",
      },
      success: {
        title: "Message sent successfully!",
        message: "We'll get back to you as soon as possible.",
        button: "Got it, thank you!",
      },
      error: {
        title: "Error sending message!",
        message: "Please try again later.",
        button: "Got it, thank you!",
      },
    },
  };

  const {
    title,
    description,
    labels,
    placeholders,
    errors: errorMessages,
    button,
    success,
    error,
  } = translations[language];

  useEffect(() => {
    if (status === "success" || status === "error") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [status]);

  const handlePhoneChange = (e) => {
    let value = e.target.value;
    value = value.replace(/\D/g, "");

    if (value.length > 2) {
      value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length > 9 && value.length <= 15) {
      value = value.replace(/^(\(\d{2}\))\s*(\d{4,5})(\d{0,4})/, (match, ddd, firstPart, secondPart) => {
        if (firstPart.length === 5) {
          return `${ddd} ${firstPart}-${secondPart}`;
        } else if (firstPart.length === 4) {
          return `${ddd} ${firstPart}-${secondPart}`;
        }
        return match;
      });
    }

    if (value.length > 15) {
      value = value.substring(0, 15);
    }
    
    setFormData((prevData) => ({
      ...prevData,
      phoneNumber: value,
    }));
    if (errors.phoneNumber) {
      setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = errorMessages.required;
    if (!formData.email.trim()) newErrors.email = errorMessages.required;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = errorMessages.required;
    } else {
      const cleanedPhone = formData.phoneNumber.replace(/\D/g, "");
      if (!/^\d{10,11}$/.test(cleanedPhone)) {
        newErrors.phoneNumber = errorMessages.invalidPhone;
      }
    }
    if (!formData.subject.trim()) newErrors.subject = errorMessages.required;
    if (!formData.message.trim()) newErrors.message = errorMessages.required;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("sending");

    const finalPhoneNumber = `+55${formData.phoneNumber.replace(/\D/g, "")}`;

    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: finalPhoneNumber,
      user_subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setStatus("success");
        setFormData({ fullName: "", email: "", phoneNumber: "", subject: "", message: "" });
      },
      (error) => {
        console.error("Error sending email: ", error.text);
        setStatus("error");
      }
    );
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full pt-16 flex flex-col items-center justify-center bg-purple-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-4"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 pt-8 text-center"
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center text-xl mb-10 text-gray-600 dark:text-gray-200"
      >
        {description}
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="flex flex-col">
            <label htmlFor="fullName" className="font-medium mb-2 text-gray-700 dark:text-gray-300">
              {labels.fullName}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className={`border ${
                errors.fullName ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder={placeholders.fullName}
            />
            {errors.fullName && (
              <p className="text-red-500 text-l mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="font-medium mb-2 text-gray-700 dark:text-gray-300">
              {labels.phone}
            </label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              required
              value={formData.phoneNumber}
              onChange={handlePhoneChange}
              maxLength={15}
              className={`border ${
                errors.phoneNumber ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder={placeholders.phone}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-l mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-2 text-gray-700 dark:text-gray-300">
              {labels.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder={placeholders.email}
            />
            {errors.email && (
              <p className="text-red-500 text-l mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-medium mb-2 text-gray-700 dark:text-gray-300">
              {labels.subject}
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className={`border ${
                errors.subject ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder={placeholders.subject}
            />
            {errors.subject && (
              <p className="text-red-500 text-l mt-1">{errors.subject}</p>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col"
        >
          <label htmlFor="message" className="font-medium mb-2 text-gray-700 dark:text-gray-300">
            {labels.message}
          </label>
          <textarea
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            className={`border ${
              errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white max-h-40 min-h-40 dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            placeholder={placeholders.message}
          />
          {errors.message && (
            <p className="text-red-500 text-l mt-1">{errors.message}</p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="pb-14"
        >
          <Button
            type="submit"
            disabled={status === "sending"}
            className="w-full mt-6 transition-all duration-300"
          >
            {status === "sending" ? button.sending : button.submit}
          </Button>
        </motion.div>
      </motion.form>

      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={() => setStatus("")}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] md:w-[400px] text-center shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl font-bold text-purple-600 dark:text-purple-300 mb-4">
                {status === "success" ? success.title : error.title}
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                {status === "success" ? success.message : error.message}
              </p>
              <Button
                onClick={() => setStatus("")}
                className="mt-4 w-full"
              >
                {status === "success" ? success.button : error.button}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;