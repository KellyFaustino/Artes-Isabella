"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineLock, AiOutlineMail, AiOutlineUser } from "react-icons/ai";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

type FormProps = {
  onSubmit: (formData: FormData) => void;
};

type InputFieldProps = {
  id: string;
  type: string;
  name: keyof FormData;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon?: React.ElementType;
};

const InputField: React.FC<InputFieldProps> = ({
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
      className="mb-2 block text-sm font-medium text-gray-700"
    >
      {placeholder}
    </label>

    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg transition focus-within:ring-2 focus-within:ring-blue-300">
      {Icon && <Icon className="mr-3 text-gray-400" size={20} />}

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

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const router = useRouter();

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    setFormData((prev) => ({
      ...prev,
      agree: e.target.checked,
    }));
  };

  const safeSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
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
    <div className="via-lavender-100 relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-5 h-40 w-40 animate-pulse bg-gradient-to-br from-mint to-blue-100 opacity-40 blur-3xl"></div>
        <div className="from-pastel-blue animate-pulse-slow absolute bottom-5 right-20 h-52 w-52 bg-gradient-to-br to-lavender opacity-30 blur-2xl"></div>
      </div>

      <form
        onSubmit={safeSubmit}
        className="w-full max-w-md space-y-6 rounded-lg border border-gray-200 bg-white/80 p-8 shadow-lg backdrop-blur-md"
      >
        <div className="text-center">
          <h2 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent">
            Crie sua conta
          </h2>

          <p className="mt-2 text-sm text-gray-600">
            Cadastre-se para acessar nossas funcionalidades exclusivas.
          </p>
        </div>

        <div className="space-y-4">
          <InputField
            id="name"
            type="text"
            name="name"
            value={formData.name}
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
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
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
          className="from-pastel-blue w-full rounded-full bg-gradient-to-r to-mint py-3 font-bold text-gray-900 shadow-xl transition-transform duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-300"
        >
          Criar Conta
        </button>

        <button
          type="button"
          onClick={handleBack}
          className="from-red-500 to-red-700 focus:ring-red-300 mt-2 w-full rounded-full bg-gradient-to-r py-3 font-bold text-black shadow-xl transition-transform duration-300 hover:scale-105 focus:ring-2"
        >
          Voltar
        </button>
      </form>
    </div>
  );
};

export default Form;
