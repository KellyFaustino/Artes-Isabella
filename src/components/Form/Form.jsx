"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const InputField = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="block text-sm font-medium text-gray-700 mb-2"
    >
      {placeholder}
    </label>
    <div className="flex items-center bg-white rounded-lg shadow-lg p-3 focus-within:ring-2 focus-within:ring-blue-300 transition">
      {Icon && <Icon className="text-gray-400 mr-3" size={20} />}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent text-gray-900 focus:outline-none"
        required
      />
    </div>
  </div>
);

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    Name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    setFormData((prevData) => ({ ...prevData, agree: e.target.checked }));
  };

  const safeSubmit = (event) => {
    event.preventDefault();
    const { password, confirmPassword, agree } = formData;
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    if (!agree) {
      alert("Você deve concordar com os termos e condições.");
      return;
    }
    onSubmit(formData);
  };

  const handleBack = () => {
    router.push("/login");
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-lavender-100 to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-20 w-40 h-40 bg-gradient-to-br from-mint to-blue-100 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 right-20 w-52 h-52 bg-gradient-to-br from-pastel-blue to-lavender opacity-30 blur-2xl animate-pulse-slow"></div>
      </div>

      <form
        onSubmit={safeSubmit}
        className="w-full max-w-md p-8 bg-white/80 backdrop-blur-md shadow-lg rounded-lg space-y-6 border border-gray-200"
      >
        <div className="text-center">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Crie sua conta
          </h2>
          <p className="text-sm text-gray-600 mt-2">
            Cadastre-se para acessar nossas funcionalidades exclusivas.
          </p>
        </div>

        <div className="space-y-4">
          <InputField
            id="first_name"
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder="Digite seu nome"
            icon={AiOutlineUser}
          />
          <InputField
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            icon={AiOutlineMail}
          />
          <InputField
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Digite sua senha"
            icon={AiOutlineLock}
          />
          <InputField
            id="confirm_password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirme sua senha"
            icon={AiOutlineLock}
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agree}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              required
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              Concordo com os{" "}
              <a href="#" className="text-blue-600 hover:underline">
                termos e condições
              </a>
              .
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pastel-blue to-mint text-gray-900 font-bold rounded-full py-3 shadow-xl transition-transform duration-300 focus:ring-2 focus:ring-blue-300 hover:scale-105"
        >
          Criar Conta
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="w-full mt-2 bg-gradient-to-r from-red-500 to-red-700 text-brack font-bold rounded-full py-3 shadow-xl transition-transform duration-300 focus:ring-2 focus:ring-red-300 hover:scale-105"
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default Form;
