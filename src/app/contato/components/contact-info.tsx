"use client";

import Link from "next/link";

export function ContactInfo() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-10 text-center">
      <h2 className="mb-4 text-3xl font-semibold text-bella-200">
        Outras Formas de Contato
      </h2>

      <p className="text-dark-300 text-lg">
        Você também pode enviar um e-mail para nós em{" "}
        <Link
          href="mailto:contato@isabellafmoura.com"
          className="text-bella-100 hover:underline"
        >
          IsabellaFaustino@gmail.com
        </Link>
      </p>
    </section>
  );
}
