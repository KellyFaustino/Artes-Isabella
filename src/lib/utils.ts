import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatPhone } from "./phone";

type validKeyType = "CNPJ" | "CPF" | "EMAIL" | "EVP" | "PHONE";

export function capitalizeString(str: string) {
  if (typeof str !== "string") {
    throw new TypeError("O argumento deve ser uma string");
  }
  if (str.length === 0) {
    return "";
  }
  const lower = str.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function convertToDate(
  value: Date | string | undefined,
): Date | undefined {
  if (!value) return undefined;
  return value instanceof Date ? value : new Date(value);
}

export function formatCnpj(value: string): string {
  const numericValue = value.replace(/\D/g, "").slice(0, 14);

  return numericValue
    .replace(/^(\d{2})(\d{1,3})/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d{1,3})/, "$1.$2.$3")
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d{1,4})/, "$1.$2.$3/$4")
    .replace(/^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{1,2})/, "$1.$2.$3/$4-$5");
}

export function formatCpf(value: string): string {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);

  return numericValue
    .replace(/^(\d{3})(\d{1,3})/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d{1,3})/, "$1.$2.$3")
    .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
}

export function formatCpfCnpj(value: string): string {
  const numericValue = value.replace(/\D/g, "").slice(0, 14);

  if (numericValue.length <= 11) {
    // CPF: 000.000.000-00
    return numericValue
      .replace(/^(\d{3})(\d{1,3})/, "$1.$2")
      .replace(/^(\d{3})\.(\d{3})(\d{1,3})/, "$1.$2.$3")
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{1,2})/, "$1.$2.$3-$4");
  } else {
    // CNPJ: 00.000.000/0000-00
    return numericValue
      .replace(/^(\d{2})(\d{1,3})/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d{1,3})/, "$1.$2.$3")
      .replace(/^(\d{2})\.(\d{3})\.(\d{3})(\d{1,4})/, "$1.$2.$3/$4")
      .replace(
        /^(\d{2})\.(\d{3})\.(\d{3})\/(\d{4})(\d{1,2})/,
        "$1.$2.$3/$4-$5",
      );
  }
}

export function formatCurrency(
  value: number,
  isDivisible: boolean = false,
): string {
  if (isDivisible && value !== 0) {
    value /= 100;
  }

  return value
    .toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
    })
    .replace("$", "COP")
    .replace("-", "- ");
}

export function formatCurrencyWithoutSymbol(value: string): string {
  const cleanValue = value.replace(/\D/g, "");
  const formattedValue = (Number(cleanValue) / 100)
    .toLocaleString("es-CO", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
    .replace("-", "- ");

  return formattedValue;
}

export function formatDate(value: string): string {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);

  return numericValue
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
}

export const formatDateByLocale = (
  date: string | Date,
  language: string,
): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Intl.DateTimeFormat(language, options).format(new Date(date));
};

export const formatTimeByLocale = (
  date: string | Date,
  language: string,
): string => {
  const options: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  return new Intl.DateTimeFormat(language, options).format(new Date(date));
};

export function formatDatetime(
  dateString: string,
  format = "dd/mm/yyyy HH:MM:ss",
  timezoneOffset?: number,
): string {
  const parsed = parseFlexibleDateSafe(dateString);
  if (!parsed) return "Invalid Date";

  let date = parsed;

  if (typeof timezoneOffset === "number") {
    const utc = date.getTime() + date.getTimezoneOffset() * 60000;
    date = new Date(utc + timezoneOffset * 3600000);
  }

  const map: Record<string, string> = {
    dd: String(date.getDate()).padStart(2, "0"),
    mm: String(date.getMonth() + 1).padStart(2, "0"),
    yyyy: String(date.getFullYear()),
    HH: String(date.getHours()).padStart(2, "0"),
    MM: String(date.getMinutes()).padStart(2, "0"),
    ss: String(date.getSeconds()).padStart(2, "0"),
    SSS: String(date.getMilliseconds()).padStart(3, "0"),
  };

  return format.replace(/yyyy|dd|mm|HH|MM|SSS|ss/g, (matched) => map[matched]);
}

function parseFlexibleDateSafe(input: string): Date | null {
  const raw = input.trim();

  const isoNormalized = raw.replace(/\.(\d{3})\d+/, ".$1");
  let d = new Date(isoNormalized);
  if (!Number.isNaN(d.getTime())) return d;

  const br =
    /^(\d{2})\/(\d{2})\/(\d{4})(?:[ T](\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,6}))?)?$/.exec(
      raw,
    );

  if (!br) return null;

  const [, dd, mm, yyyy, HH = "00", MM = "00", ss = "00", frac = "0"] = br;
  const ms = frac.slice(0, 3).padEnd(3, "0");

  d = new Date(
    Number(yyyy),
    Number(mm) - 1,
    Number(dd),
    Number(HH),
    Number(MM),
    Number(ss),
    Number(ms),
  );

  if (
    d.getFullYear() !== Number(yyyy) ||
    d.getMonth() !== Number(mm) - 1 ||
    d.getDate() !== Number(dd)
  ) {
    return null;
  }

  return d;
}

export function formatDateToIso(value: string): string {
  if (!isValidDate(value)) return "";

  const [day, month, year] = value.split("/");

  return `${year}-${month}-${day}`;
}

export function formatIsoToDate(value: string): string {
  const [year, month, day] = value.split("-");

  return `${day}/${month}/${year}`;
}

export function formatEvp(value: string): string {
  const hexValue = value.replace(/[^0-9a-fA-F]/g, "").slice(0, 32);

  return hexValue
    .replace(/^([0-9a-fA-F]{8})([0-9a-fA-F]{1,4})/, "$1-$2")
    .replace(/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4})([0-9a-fA-F]{1,4})/, "$1-$2")
    .replace(
      /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4})([0-9a-fA-F]{1,4})/,
      "$1-$2",
    )
    .replace(
      /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4})([0-9a-fA-F]{1,12})/,
      "$1-$2",
    );
}

export function formatNumber(value: string): string {
  const numericValue = value.replace(/\D/g, "");

  return numericValue;
}

export function formatWithMask(value: string, mask: validKeyType): string {
  switch (mask) {
    case "CNPJ":
      value = formatCnpj(value);
      break;

    case "CPF":
      value = formatCpf(value);
      break;

    case "EVP":
      value = formatEvp(value);
      break;

    case "PHONE":
      value = formatPhone(value);
      break;

    default:
  }

  return value;
}

export function getQueryStringPagination(
  page: number,
  perPage: number,
  perPageDefault = 10,
): string | null {
  let queryString = null;

  if (page > 1) {
    queryString = `page=${page}`;

    if (perPage !== perPageDefault) {
      queryString += `&limit=${perPage}`;
    }
  } else if (perPage !== perPageDefault) {
    queryString = `limit=${perPage}`;
  }

  return queryString;
}

export const getUtcIsoNoZ = () => new Date().toISOString().slice(0, -1);

export const getUtcIsoWithZ = () => new Date().toISOString();

export function isValidCnpj(value: string): boolean {
  return /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/.test(value);
}

export function isValidCpf(value: string): boolean {
  return /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(value);
}

export function isValidDate(value: string): boolean {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) return false;

  const [dayStr, monthStr, yearStr] = value.split("/");
  const day = parseInt(dayStr, 10);
  const month = parseInt(monthStr, 10);
  const year = parseInt(yearStr, 10);

  if (year < 1900 || year > 2100) return false;
  if (month < 1 || month > 12) return false;

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return false;

  return true;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isValidEvp(value: string): boolean {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(
    value,
  );
}

export function isValidKeyType(value: unknown): value is validKeyType {
  return ["CNPJ", "CPF", "EMAIL", "EVP", "PHONE"].includes(
    value as validKeyType,
  );
}

export const validateCPForCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "");

  return digits.length === 11 || digits.length === 14;
};

export function safeParseObject(text?: string) {
  if (!text?.trim()) return {};
  try {
    const v = JSON.parse(text);
    if (v && typeof v === "object" && !Array.isArray(v)) return v;
    return {};
  } catch {
    return {};
  }
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function hasAnyTrue(v: any): boolean {
  if (v === true) return true;
  if (!v || typeof v !== "object") return false;
  return Object.values(v).some((x) => hasAnyTrue(x));
}
