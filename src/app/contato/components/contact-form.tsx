"use client";

import { FormFieldInput } from "@/components/shared/form/form-field-input";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

export function ContactForm() {
  const form = useForm<FormData>({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados do formulário:", data);
  };

  return (
    <section className="mx-auto max-w-3xl rounded-xl border border-bella-100/30 bg-white px-6 py-8 shadow-lg">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormFieldInput
            form={form}
            name="name"
            label="Nome"
            placeholder="Digite seu nome"
          />

          <FormFieldInput
            form={form}
            name="phone"
            label="Telefone"
            placeholder="Digite seu telefone"
          />

          <FormFieldInput
            form={form}
            name="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />

          <div>
            <label className="text-dark-300 block text-sm font-medium">
              Mensagem
            </label>

            <textarea
              {...form.register("message")}
              rows={4}
              className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-bella-100"
              placeholder="Digite sua mensagem"
            />
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="bg-bella-100 text-white hover:bg-bella-200"
            >
              Enviar
            </Button>
          </div>
        </form>
      </Form>
    </section>
  );
}
