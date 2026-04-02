"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import { IconType } from "react-icons";
import { AiOutlineLock, AiOutlineMail } from "react-icons/ai";

import Alert from "../alerta/alerta";

type InputFieldProps = {
  id: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  icon: IconType;
};

type LoginFormProps = {
  onLogin: (user: { email: string }) => void;
};

const InputField = ({
  id,
  type,
  name,
  value,
  onChange,
  placeholder,
  icon: Icon,
}: InputFieldProps) => (
  <div className="relative">
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-gray-600"
    >
      {placeholder}
    </label>

    <div className="flex items-center rounded-lg bg-white p-3 shadow-lg transition focus-within:ring-2 focus-within:ring-blue-300">
      <Icon className="mr-3 text-gray-400" size={20} />

      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
        placeholder={placeholder}
        required
      />
    </div>
  </div>
);

const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<"login" | "register">("login");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Credenciais inválidas!");
      }

      const data: { token: string } = await res.json();

      localStorage.setItem("token", data.token);

      setSuccessMessage("Login realizado com sucesso!");
      onLogin({ email: formData.email });

      setTimeout(() => setSuccessMessage(null), 3000);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage("Erro inesperado");
      }
    } finally {
      setLoading(false);
    }
  };

  if (showForm === "register") {
    return <form />;
  }

  return (
    <div className="via-lavender-100 relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 to-blue-200">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-5 h-40 w-40 animate-pulse bg-gradient-to-br from-mint to-blue-100 opacity-40 blur-3xl"></div>
        <div className="from-pastel-blue animate-pulse-slow absolute bottom-5 right-20 h-52 w-52 bg-gradient-to-br to-lavender opacity-30 blur-2xl"></div>
      </div>

      <div className="z-10 flex w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-lg backdrop-blur-md lg:flex-row">
        {/* Imagem */}
        <div className="relative overflow-hidden lg:w-1/2">
          <Image
            src="/Bella.jpg"
            alt="Imagem de login"
            fill
            className="object-cover"
          />
        </div>

        {/* Formulário */}
        <div className="flex flex-col justify-center p-10 lg:w-1/2">
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-8">
            <div className="text-center">
              <h2 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-4xl font-extrabold text-transparent">
                Bem-vindo de volta!
              </h2>
              <p className="mt-2 text-gray-600">
                Faça login para continuar explorando.
              </p>
            </div>

            {/* Alerts */}
            {errorMessage && (
              <Alert
                type="error"
                message={errorMessage}
                onClose={() => setErrorMessage(null)}
                className="fixed right-5 top-5 z-50"
              />
            )}

            {successMessage && (
              <Alert
                type="success"
                message={successMessage}
                onClose={() => setSuccessMessage(null)}
                className="fixed right-5 top-5 z-50"
              />
            )}

            {/* Inputs */}
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

            <button
              type="submit"
              className={`from-pastel-blue w-full rounded-full bg-gradient-to-r to-mint py-3 font-bold text-gray-900 shadow-xl transition ${
                loading ? "cursor-not-allowed opacity-70" : "hover:scale-105"
              }`}
              disabled={loading}
            >
              {loading ? "Carregando..." : "Entrar"}
            </button>

            <div className="mt-4 text-center text-sm">
              <span className="cursor-pointer text-gray-500 hover:underline">
                Esqueceu a senha?
              </span>
              <Link
                href="/esqudeci-senha"
                className="text-blue-400 hover:text-blue-600 hover:underline"
                onClick={() => setShowForm("register")}
              ></Link>
            </div>

            <div className="mt-2 text-center text-sm text-gray-500">
              <span>Não possui uma conta? </span>
              <Link
                href="/cadastro"
                className="text-blue-400 hover:text-blue-600 hover:underline"
                onClick={() => setShowForm("register")}
              >
                Cadastre-se agora!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
