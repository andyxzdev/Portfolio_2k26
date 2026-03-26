import React, { useState } from "react";
import axios from "axios";

const Forms = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    tipoProjeto: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://www.andyxdev.com.br/api/contato", formData);

      alert("Mensagem enviada com sucesso 🚀");

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        tipoProjeto: "",
        mensagem: "",
      });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-20 px-6 md:px-16 bg-[#111111] text-white overflow-hidden">
      {/* OVERLAY (melhora contraste) */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTEÚDO */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Vamos criar seu projeto?
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Me conte um pouco sobre sua ideia e eu entro em contato para te
            ajudar.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto flex flex-col gap-6"
        >
          {/* NOME */}
          <input
            type="text"
            name="nome"
            placeholder="Seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder="Seu email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* TELEFONE */}
          <input
            type="tel"
            name="telefone"
            placeholder="Seu telefone (WhatsApp)"
            value={formData.telefone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* TIPO DE PROJETO */}
          <select
            name="tipoProjeto"
            value={formData.tipoProjeto}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 text-gray-300 focus:outline-none focus:border-white transition"
          >
            <option value="">Tipo de projeto</option>
            <option value="site">Site institucional</option>
            <option value="landing">Landing Page</option>
            <option value="sistema">Sistema Web</option>
            <option value="mobile">Aplicativo Mobile</option>
            <option value="design">UI/UX Design</option>
          </select>

          {/* MENSAGEM */}
          <textarea
            name="mensagem"
            placeholder="Fale sobre seu projeto..."
            value={formData.mensagem}
            onChange={handleChange}
            rows={5}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* BOTÃO */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-white text-black font-semibold hover:opacity-80 transition disabled:opacity-50 cursor-pointer"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
