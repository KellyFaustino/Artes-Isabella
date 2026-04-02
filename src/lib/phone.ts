export type PhoneCountryCode = "BRA" | "COL" | "USA";

export interface PhoneOption {
  label: string;
  value: PhoneCountryCode;
}

export const PHONE_DDI_BY_CODE: Record<PhoneCountryCode, string> = {
  BRA: "+55",
  COL: "+57",
  USA: "+1",
};

export const PHONE_MASK_BY_CODE: Record<PhoneCountryCode, string> = {
  BRA: "(##) #####-####",
  COL: "(###) ###-####",
  USA: "(###) ###-####",
};

const PHONE_RULES_BY_LENGTH: Record<number, string[]> = {
  10: ["+1", "+55", "+57"],
  11: ["+55"],
};

export const PHONE_SELECT_OPTIONS: PhoneOption[] = [
  { value: "BRA", label: "BRA (+55)" },
  { value: "COL", label: "COL (+57)" },
  { value: "USA", label: "USA (+1)" },
];

export const applyPhoneMask = (digits: string, mask: string) => {
  let out = "";
  let di = 0;

  for (let i = 0; i < mask.length && di < digits.length; i++) {
    out += mask[i] === "#" ? digits[di++] : mask[i];
  }

  return out;
};

export const formatPhone = (value: string): string => {
  const numericValue = value.replace(/\D/g, "").slice(0, 11);

  if (numericValue.length < 11) {
    return numericValue
      .replace(/^(\d{2})(\d{1,4})/, "($1) $2")
      .replace(/(\d{4})(\d{1,4})$/, "$1-$2");
  }

  return numericValue
    .replace(/^(\d{2})(\d{1,5})/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
};

export const formatStoredPhone = (value: string): string => {
  if (!value) return "";

  const m = /^\+(\d{1,3})\s*(\d+)$/.exec(value.trim());
  if (!m) return value;

  const dial = `+${m[1]}`;
  const code = getPhoneCodeByDDI(dial);
  if (!code) return value;

  const rawDigits = (m[2] || "").replace(/\D/g, "");
  const limited = rawDigits.slice(0, getMaxPhoneDigits(code));
  const mask = getPhoneMask(code, limited.length);
  const masked = applyPhoneMask(limited, mask);

  return masked ? `${dial} ${masked}` : dial;
};

export const getMaxPhoneDigits = (code: PhoneCountryCode) => {
  const value = PHONE_MASK_BY_CODE[code];

  return value ? (value.match(/#/g) || []).length : 0;
};

export const getPhoneCodeByDDI = (
  dial: string,
): PhoneCountryCode | undefined => {
  const entry = Object.entries(PHONE_DDI_BY_CODE).find(([, v]) => v === dial);

  return entry?.[0] as PhoneCountryCode | undefined;
};

export const getPhoneMask = (code: PhoneCountryCode, digitsLen: number) => {
  if (code === "BRA") {
    return digitsLen > 10 ? "(##) #####-####" : "(##) ####-####";
  }

  return PHONE_MASK_BY_CODE[code];
};

export const isValidPhone = (value: string): boolean => {
  return /\(\d{2}\) \d{4,5}-\d{4}/.test(value);
};

export const isValidPhoneByLength = (value: string): boolean => {
  const m = /^\+(\d{1,3})\s*(\d+)$/.exec(value);
  if (!m) return false;

  const ddi = `+${m[1]}`;
  const digitsLen = m[2]?.length ?? 0;
  const ddIs = PHONE_RULES_BY_LENGTH[digitsLen];

  return Array.isArray(ddIs) && ddIs.includes(ddi);
};

export const isValidPhoneCode = (c: string): c is PhoneCountryCode =>
  Object.hasOwn(PHONE_DDI_BY_CODE, c);
