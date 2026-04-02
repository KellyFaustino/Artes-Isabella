import { ReactNode } from "react";

interface PageContentProps {
  children: ReactNode;
}

export const PageContent = ({ children }: PageContentProps) => {
  return <div className="flex flex-col gap-2 px-12 py-6">{children}</div>;
};
