// client/src/utils/format.ts
const currencyFormatter = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
});

export const formatCurrency = (amount: number) =>
  currencyFormatter.format(amount);

export const formatDate = (isoDate: string) =>
  new Date(isoDate).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
