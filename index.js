const calculateTotal = (subtotal, shipping = 2.50) => {
  return subtotal + shipping;
}

const printTopThreeHeadlines = (...headlines) => {
  return headlines.slice(0, 3).join('\n');
}