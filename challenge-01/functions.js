const addQuotation = (str) => {
  const parsedString = str.split(" ").map((item) => {
    const key = item.split(":")[0];
    const value = item.split(":")[1];
    return `"${key}":"${value}"`;
  });

  return `{${parsedString}}`;
};

export { addQuotation };
