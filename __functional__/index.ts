import table from '../';

const data = table`
  A    | B
  ${1} | ${2}
`;

test('Ensure that the module exports the runtime function correctly', () => {
  expect(data).toMatchInlineSnapshot(`
    Array [
      Object {
        "A": 1,
        "B": 2,
      },
    ]
  `);
});
