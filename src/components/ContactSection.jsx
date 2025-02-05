import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./ButtonPurple"; 

const serviceId = "service_3cck3s6";
const templateId = "template_xwq40df";
const publicKey = "uVXdxc_nUznzm6N3X";

const formatPhoneNumber = (value) => {
  value = value.replace(/\D/g, ""); // Remove tudo que não for número
  if (value.length > 11) value = value.slice(0, 11); // Limita a 11 dígitos

  return value.length <= 10
    ? value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3") // Formato (XX) XXXX-XXXX
    : value.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3"); // Formato (XX) XXXXX-XXXX
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "mobile" ? formatPhoneNumber(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-purple-50 p-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10 text-center">
        Vamos construir algo incrível <span className="text-purple-600">juntos?</span>
      </h2>
      <p className="text-gray-600 text-center mb-8">
        Envie sua proposta e entraremos em contato o mais breve possível.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-gray-700 font-medium mb-2">Nome Completo</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Seu nome completo"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mobile" className="text-gray-700 font-medium mb-2">Telefone</label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              maxLength={15}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="seuemail@exemplo.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-gray-700 font-medium mb-2">Assunto</label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 w-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Qual é o assunto?"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-medium mb-2">Sua Mensagem</label>
          <textarea
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full max-h-40 min-h-40 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Escreva sua mensagem aqui..."
          />
        </div>
        <div className="pb-14">
            <Button type="submit" disabled={status === "sending"} className="w-full mt-6">
            {status === "sending" ? "Enviando..." : "ENVIAR MENSAGEM"}
            </Button>
            {status === "success" && <p className="text-green-600 text-center mt-4 mb-8">Mensagem enviada com sucesso!</p>}
            {status === "error" && <p className="text-red-600 text-center mt-4 mb-8">Erro ao enviar mensagem. Tente novamente.</p>}
        </div>
      </form>
    </div>
  );
};

export default ContactForm;