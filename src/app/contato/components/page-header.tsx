"use client";

type Props = {
  title: string;
  description: string;
};

export function PageHeader({ title, description }: Props) {
  return (
    <>
      <h1 className="mb-6 text-center text-5xl font-extrabold text-bella-100">
        {title}
      </h1>

      <p className="mx-auto mb-10 max-w-3xl text-center text-2xl text-dark-200">
        {description}
      </p>
    </>
  );
}
