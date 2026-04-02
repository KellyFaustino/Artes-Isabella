"use client";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib";

type PageLoadingProps = {
  isInternal?: boolean;
};

export const PageLoading = ({ isInternal }: PageLoadingProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={cn(
        isInternal ? "h-[calc(100vh-175px)]" : "h-screen",
        "flex flex-col items-center justify-center gap-6",
        !isInternal && 'bg-[url("/bg-content.jpg")] bg-cover bg-left-bottom',
        isInternal ? "dark:bg-transparent" : "dark:bg-accent dark:bg-none",
      )}
    >
      <div className="bg-white/30 backdrop-blur-md" />

      <div className="flex flex-col items-center justify-center gap-6">
        <div className="border-destructive h-16 w-16 animate-spin rounded-full border-t-4" />
        <div className="text-primary">{t("loading.description")}</div>
      </div>
    </div>
  );
};
