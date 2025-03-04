import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import Button from "./ButtonAllPurple";
import { useInView } from "react-intersection-observer";

const serviceId = "service_3cck3s6";
const templateId = "template_xwq40df";
const publicKey = "uVXdxc_nUznzm6N3X";

const formatPhoneNumber = (value) => {
  value = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

  return value.length <= 10
    ? value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") // Formato (XX) XXXX-XXXX
    : value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) XXXXX-XXXX"); // Formato (XX) XXXXX-XXXX
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({}); // Estado para armazenar erros de validação

  // Desativa o scroll quando o card de confirmação está aberto
  useEffect(() => {
    if (status === "success" || status === "error") {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "mobile" ? formatPhoneNumber(value) : value,
    }));
    // Limpa o erro ao começar a digitar
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Preencha este campo";
    if (!formData.email.trim()) newErrors.email = "Preencha este campo";
    if (!formData.mobile.trim()) newErrors.mobile = "Preencha este campo";
    if (!formData.subject.trim()) newErrors.subject = "Preencha este campo";
    if (!formData.message.trim()) newErrors.message = "Preencha este campo";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true se não houver erros
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Valida o formulário antes de enviar

    setStatus("sending");

    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      user_phone: formData.mobile,
      user_subject: formData.subject,
      message: formData.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setStatus("success");
        setFormData({ fullName: "", email: "", mobile: "", subject: "", message: "" });
      },
      (error) => {
        console.error("Error sending email: ", error.text);
        setStatus("error");
      }
    );
  };

  // Hook useInView para detectar quando a seção está visível
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Dispara a animação uma vez
    threshold: 0.1, // A animação começa quando 10% da seção estiver visível
  });

  return (
    <div
      ref={sectionRef}
      className="min-h-screen w-full pt-16 flex flex-col items-center justify-center bg-purple-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-all duration-300 p-4"
    >
      {/* Título e descrição */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4 pt-8 text-center"
      >
        Vamos construir algo incrível <span className="text-purple-600 dark:text-purple-300">JUNTOS</span>?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-center mb-10 text-gray-600 dark:text-gray-200"
      >
        Envie sua proposta e entraremos em contato o mais breve possível.
      </motion.p>

      {/* Formulário */}
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-3xl w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        {/* Nome e Telefone */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="flex flex-col">
            <label htmlFor="fullName" className="font-medium mb-2 text-gray-700 dark:text-gray-300">Nome Completo</label>
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
              placeholder="Seu nome completo"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile" className="font-medium mb-2 text-gray-700 dark:text-gray-300">Telefone</label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              maxLength={15}
              className={`border ${
                errors.mobile ? "border-red-500" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              placeholder="(XX) XXXXX-XXXX"
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>
        </motion.div>

        {/* E-mail e Assunto */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <div className="flex flex-col">
            <label htmlFor="email" className="font-medium mb-2 text-gray-700 dark:text-gray-300">E-mail</label>
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
              placeholder="seuemail@exemplo.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="font-medium mb-2 text-gray-700 dark:text-gray-300">Assunto</label>
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
              placeholder="Qual é o assunto?"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>
        </motion.div>

        {/* Mensagem */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="flex flex-col"
        >
          <label htmlFor="message" className="font-medium mb-2 text-gray-700 dark:text-gray-300">Sua Mensagem</label>
          <textarea
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            className={`border ${
              errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-600"
            } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
            placeholder="Escreva sua mensagem aqui..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </motion.div>

        {/* Botão e Status */}
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
            {status === "sending" ? "Enviando..." : "ENVIAR MENSAGEM"}
          </Button>
        </motion.div>
      </motion.form>

      {/* Card de confirmação */}
      <AnimatePresence>
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
            onClick={() => setStatus("")} // Fecha o card ao clicar no fundo
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] md:w-[400px] text-center shadow-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()} // Impede que o card feche ao clicar nele
            >
              <h2 className="text-xl font-bold text-purple-600 dark:text-purple-300 mb-4">
                {status === "success" ? "Mensagem enviada com sucesso!" : "Erro ao enviar mensagem!"}
              </h2>
              <p className="text-gray-700 dark:text-gray-200">
                {status === "success"
                  ? "Entraremos em contato o mais breve possível."
                  : "Por favor, tente novamente mais tarde."}
              </p>
              <Button
                onClick={() => setStatus("")}
                className="mt-4 w-full"
              >
                Entendido, obrigado!
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;