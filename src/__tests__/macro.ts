import plugin from 'babel-plugin-macros';
import pluginTester from 'babel-plugin-tester';
import pkg from '../../package.json';

pluginTester({
  plugin,
  snapshot: true,
  babelOptions: { filename: __filename, ...pkg.babel },
  tests: [
    `
      import table from '../macro';

      type Data = {
        cell: number;
        presentation: 'slideshow' | 'static';
        preloading: boolean;
      };

      const data = table<Data>\`
        cell | presentation   | preloading
        \${2} | \${'slideshow'} | \${true}
        \${3} | \${'static'}    | \${true}
        \${4} | \${'slideshow'} | \${false}
        \${5} | \${'static'}    | \${false}
      \`;
    `
  ]
});
