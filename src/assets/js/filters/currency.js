"use strict";

export default function currency(value) {
  if (!value) {
    return "";
  }
  return parseFloat(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
