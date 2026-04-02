"use client";

import { t } from "i18next";
import { ReactNode } from "react";
import { FieldPath, FieldValues, UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@/components/ui";
import { formatCurrencyWithoutSymbol, formatDate, formatNumber } from "@/lib";

type Mask = "currencyWithoutSymbol" | "date" | "numbers" | "phone";

interface FormFieldInputProps<TFormValues extends FieldValues> {
  className?: string;
  disabled?: boolean;
  form: UseFormReturn<TFormValues>;
  isOptional?: boolean;
  label: ReactNode;
  mask?: Mask;
  maxLength?: number;
  name: FieldPath<TFormValues>;
  placeholder?: string;
  symbol?: string;
  type?: "password";

  onChange?: (value: string) => void;
}

export function FormFieldInput<TFormValues extends FieldValues>({
  className,
  disabled,
  form,
  isOptional,
  label,
  mask,
  maxLength,
  name,
  placeholder,
  symbol,
  type,
  onChange,
}: Readonly<FormFieldInputProps<TFormValues>>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const getDisplayValue = (value: string) => {
          if (value !== "") {
            switch (mask) {
              case "currencyWithoutSymbol":
                return formatCurrencyWithoutSymbol(value);

              case "date":
                return formatDate(value);

              case "numbers":
                return formatNumber(value);

              default:
            }
          }

          return value;
        };

        return (
          <FormItem className={className}>
            <FormLabel>
              {isOptional ? (
                <div className="flex items-center gap-1">
                  <div>{label}</div>
                  <div className="text-muted-foreground text-sm">
                    ({t("pages.shared.optional")})
                  </div>
                </div>
              ) : (
                label
              )}
            </FormLabel>

            <div className="flex w-full gap-2">
              {symbol && (
                <div className="border-input bg-muted flex h-10 min-w-[40px] items-center justify-center rounded-md border px-2">
                  {symbol}
                </div>
              )}

              <div className="w-full">
                <FormControl>
                  <Input
                    {...field}
                    disabled={disabled}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    type={mask ? "text" : type}
                    value={getDisplayValue(field.value)}
                    onChange={(event) => {
                      const rawInputValue = event.target.value;
                      const finalValueForForm = getDisplayValue(rawInputValue);

                      field.onChange(finalValueForForm);
                      onChange?.(finalValueForForm);
                    }}
                  />
                </FormControl>

                <FormMessage />
              </div>
            </div>
          </FormItem>
        );
      }}
    />
  );
}
