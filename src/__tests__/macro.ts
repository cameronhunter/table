import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename },
  tests: [
    `
      import table from '../macro'

      const data = table\`
        cell | presentation   | preloading
        \${2} | \${'slideshow'} | \${true}
        \${3} | \${'static'}    | \${true}
        \${4} | \${'slideshow'} | \${false}
        \${5} | \${'static'}    | \${false}
      \`;
    `
  ]
});
