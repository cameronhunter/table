import table from "../index";

const data = table`
  cell | presentation   | preloading
  ${2} | ${"slideshow"} | ${true}
  ${3} | ${"static"}    | ${true}
  ${4} | ${"slideshow"} | ${false}
  ${5} | ${"static"}    | ${false}
`;

test("data", () => {
  expect(data).toMatchInlineSnapshot(`
    Array [
      Object {
        "cell": 2,
        "preloading": true,
        "presentation": "slideshow",
      },
      Object {
        "cell": 3,
        "preloading": true,
        "presentation": "static",
      },
      Object {
        "cell": 4,
        "preloading": false,
        "presentation": "slideshow",
      },
      Object {
        "cell": 5,
        "preloading": false,
        "presentation": "static",
      },
    ]
  `);
});
