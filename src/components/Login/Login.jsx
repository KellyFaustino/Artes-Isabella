import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import Form from '../Form/Form';
import Link from 'next/link';
import Alert from '../Alerta/Alerta';

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
      className="block text-sm font-medium text-gray-600 mb-2"
    >
      {placeholder}
    </label>
    <div className="flex items-center bg-white rounded-lg shadow-lg p-3 focus-within:ring-2 focus-within:ring-blue-300 transition">
      <Icon
        className="text-gray-400 mr-3 group-focus-within:text-blue-500"
        size={20}
      />
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
        placeholder={placeholder}
        aria-label={placeholder}
        aria-required="true"
        required
      />
    </div>
  </div>
);

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showForm, setShowForm] = useState('login');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    setTimeout(() => {
      const { email, password } = formData;
      if (email === 'kellykelinha_86@hotmail.com' && password === '123') {        
        setSuccessMessage('Login realizado com sucesso!');
        onLogin({ email });
        setTimeout(() => setSuccessMessage(null), 3000);
      } else {
        setErrorMessage('Credenciais inválidas!');
      }
      setLoading(false);
    }, 1500);
  };

  if (showForm === 'register') {
    return <Form />;
  }

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-br from-blue-50 via-lavender-100 to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-5 left-20 w-40 h-40 bg-gradient-to-br from-mint to-blue-100 opacity-40 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-5 right-20 w-52 h-52 bg-gradient-to-br from-pastel-blue to-lavender opacity-30 blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white/80 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden border border-gray-200 animate-slide-in z-10">
        <div className="lg:w-1/2 relative overflow-hidden">
          <Image
            src="/Bella.jpg"
            alt="Imagem de login"
            className="w-full h-full object-cover animate-fade-in"
            layout="fill"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center p-10">
          <form
            onSubmit={handleSubmit}
            className="space-y-8 max-w-md mx-auto animate-fade-in"
          >
            <div className="text-center">
              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                Bem-vindo de volta!
              </h2>
              <p className="text-gray-600 mt-2">
                Faça login para continuar explorando.
              </p>
            </div>

            {errorMessage && (
              <Alert
                type="error"
                message={errorMessage}
                onClose={() => setErrorMessage(null)}
                customClass="fixed top-5 right-5 z-50"
              />
            )}
            {successMessage && (
              <Alert
                type="success"
                message={successMessage}
                onClose={() => setSuccessMessage(null)}
                customClass="fixed top-5 right-5 z-50"
              />
            )}

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
              className={`w-full bg-gradient-to-r from-pastel-blue to-mint text-gray-900 font-bold rounded-full py-3 shadow-xl transition-transform duration-300 focus:ring-2 focus:ring-blue-300 ${
                loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
              }`}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
                  <span>Carregando...</span>
                </div>
              ) : (
                'Entrar'
              )}
            </button>

            <div className="mt-4 text-center text-sm">
              <a
                href="#"
                className="text-gray-500 hover:underline hover:text-gray-700 transition-all"
              >
                Esqueceu a senha?
              </a>
            </div>
            <div className="text-center text-sm text-gray-500 mt-2">
              <span>Não possui uma conta? </span>
              <Link
                href="/cadastro"
                className="text-blue-400 hover:underline hover:text-blue-600 transition-all"
                onClick={() => setShowForm('register')}
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
