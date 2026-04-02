"use client";

import Header from "@/components/header/header";
import Rodape from "@/components/rodape/rodape";
import { ContactForm, ContactInfo, PageHeader } from "./components/";

export default function Contato() {
  const user = { name: "Kelly Faustino" };

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header user={user} />

      <main className="flex-grow">
        <PageHeader
          title="Contato"
          description="Entre em contato conosco para mais informações."
        />

        <ContactForm />

        <ContactInfo />
      </main>

      <Rodape />
    </div>
  );
}
