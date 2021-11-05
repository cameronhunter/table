import { getColumnNames, getRows } from "./utils";

export default function table(
  strings: TemplateStringsArray,
  ...keys: any[]
): { [column: string]: any } {
  const headers = getColumnNames(strings[0]);
  const numberOfHeaders = headers?.length;

  if (!numberOfHeaders) {
    throw new Error("Could not determine the column names from the table.");
  }

  const rows = getRows(keys, numberOfHeaders);

  return rows.map((values: any[]) => {
    return headers.reduce(
      (state, header, index) => ({ ...state, [header]: values[index] }),
      {}
    );
  });
}
