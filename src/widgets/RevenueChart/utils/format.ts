import compose from "compose-function";

const REQUIRED_SYMBOL = "0";

const parseNum =
  (expr = /^[0-9,]+$/) =>
  (str: string) =>
    str
      .split("")
      .filter((char) => expr.test(char))
      .join("");

const replace =
  (from = "", to = "") =>
  (str: string) =>
    str.split(from).join(to);

const fixed = () => (str: string) => Number(str).toFixed();

const validate = (raw: string, template: string): boolean => {
  if (!raw) {
    return false;
  }
  let count = 0;

  for (const c of template) {
    if (c === REQUIRED_SYMBOL) {
      count++;
    }
  }

  return !!raw.match(new RegExp("^[\\d|\\w]{" + count + "}$"));
};

export const format = (raw = "", templates: string[]) => {
  const template = templates.find((el) => validate(raw, el));
  if (!template) {
    return raw;
  }

  let idx = 0;
  let result = "";
  for (const c of template) {
    if (c === REQUIRED_SYMBOL) {
      result += raw[idx];
      idx++;
    } else {
      result += c;
    }
  }

  return result;
};

export const formatSum = (raw = "") =>
  format(compose(fixed(), replace(",", "."), parseNum())(raw), [
    "000",
    "0 000",
    "00 000",
    "000 000",
    "0 000 000",
    "00 000 000",
    "000 000 000",
    "0 000 000 000",
    "00 000 000 000",
    "000 000 000 000",
    "0 000 000 000 000",
  ]);

export default format;
