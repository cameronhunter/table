import * as babel from "@babel/core";

test("Ensure that the module exports the babel macro correctly", async () => {
  const { code } = await babel.transformAsync(
    `
      const table = require('../macro');

      const data = table\`
        A    | B
        \${1} | \${2}
      \`;
    `,
    { babelrc: false, plugins: ["macros"], filename: __filename }
  );

  expect(code).toMatchInlineSnapshot(`
    "const data = [{
      A: 1,
      B: 2
    }];"
  `);
});
