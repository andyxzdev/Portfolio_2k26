import React, { useState } from "react";
import axios from "axios";
import { useTranslation } from "react-i18next";

const Forms = () => {
  const { t } = useTranslation();

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
      await axios.post("/api/contato/", formData);

      alert(t("form.success"));

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        tipoProjeto: "",
        mensagem: "",
      });
    } catch (error) {
      console.error(error);
      alert(t("form.error"));
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
            {t("form.title")}
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">{t("form.subtitle")}</p>
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
            placeholder={t("form.name")}
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* EMAIL */}
          <input
            type="email"
            name="email"
            placeholder={t("form.email")}
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-[#1a1a1a] border border-gray-700 focus:outline-none focus:border-white transition"
          />

          {/* TELEFONE */}
          <input
            type="tel"
            name="telefone"
            placeholder={t("form.phone")}
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
            <option value="">{t("form.projectType")}</option>
            <option value="site">{t("form.site")}</option>
            <option value="landing">{t("form.landing")}</option>
            <option value="sistema">{t("form.system")}</option>
            <option value="mobile">{t("form.mobile")}</option>
            <option value="design">{t("form.design")}</option>
          </select>

          {/* MENSAGEM */}
          <textarea
            name="mensagem"
            placeholder={t("form.message")}
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
            {loading ? t("form.sending") : t("form.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Forms;
