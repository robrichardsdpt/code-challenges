const replacer = (key: string, value: string) => (value === null ? "" : value); // specify how you want to handle null values here

export const convertJsonToCsv = (input): string => {
  const items = input.items;

  const header = Object.keys(items[0]);
  const csv = [
    header.join(","), // header row first
    ...items.map((row: string) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(",")
    ),
  ].join("\r\n");

  return csv;
};
