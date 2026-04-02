"use client";

import { useRouter } from "next/navigation";

const PoliticaDePrivacidade = () => {
  const router = useRouter();

  const handleBack = () => {
    router.push("/home");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-semibold">Política de Privacidade</h1>
      <p>Para acessar nossa Política de Privacidade, clique no link abaixo:</p>
      <a
        href="/politica-de-privacidade.pdf"
        target="_blank"
        className="text-blue-600 underline"
      >
        Política de Privacidade (PDF)
      </a>
      <div className="mt-4">
        <button
          onClick={handleBack}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        >
          Voltar
        </button>
      </div>
    </div>
  );
};

export default PoliticaDePrivacidade;
