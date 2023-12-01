export const formatPrice = (value: number): string => {
  return new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
  }).format(value);
};
