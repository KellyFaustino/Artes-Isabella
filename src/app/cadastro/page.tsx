"use client";

import Form from "@/components/form/form";

type FormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  agree: boolean;
};

const Cadastro = () => {
  const handleSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const result = await response.json();
      console.log("Cadastro bem-sucedido:", result);

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro inesperado");
      }
    }
  };

  return (
    <div className="h-screen">
      <Form onSubmit={handleSubmit} />
    </div>
  );
};

export default Cadastro;
