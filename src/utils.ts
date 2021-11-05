export function getColumnNames(row: string | undefined): string[] | undefined {
  return row === undefined
    ? undefined
    : row
        .trim()
        .split('|')
        .map((value) => value.trim());
}

export function getRows<T>(values: T[], numberOfColumns: number): Array<T[]> {
  return values.reduce((state, expression, index) => {
    if (index % numberOfColumns === 0 || state.length === 0) {
      state.push([expression]);
    } else {
      state[state.length - 1].push(expression);
    }

    return state;
  }, [] as Array<T[]>);
}
