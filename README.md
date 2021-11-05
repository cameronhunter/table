# Table ![CI](https://github.com/cameronhunter/table/actions/workflows/ci.yml/badge.svg)

Create an array of objects from a table of data defined in a template string.

## Runtime

The default import will convert the table into an array of objects at runtime.

```ts
import table from '@cameronhunter/table';

type Data = {
  cell: number;
  presentation: 'slideshow' | 'static';
  preloading: boolean;
};

const data: Data[] = table`
  cell | presentation   | preloading
  ${2} | ${'slideshow'} | ${true}
  ${3} | ${'static'}    | ${true}
  ${4} | ${'slideshow'} | ${false}
  ${5} | ${'static'}    | ${false}
`;
```

## Babel Macro

The babel macro will convert the table into an array of objects at build time.
The usage is the same as the runtime function, just a different import.

```ts
import table from '@cameronhunter/table/macro';

type Data = {
  cell: number;
  presentation: 'slideshow' | 'static';
  preloading: boolean;
};

const data: Data[] = table`
  cell | presentation   | preloading
  ${2} | ${'slideshow'} | ${true}
  ${3} | ${'static'}    | ${true}
  ${4} | ${'slideshow'} | ${false}
  ${5} | ${'static'}    | ${false}
`;
```

↓ ↓ ↓ ↓ ↓ ↓

```ts
type Data = {
  cell: number;
  presentation: 'slideshow' | 'static';
  preloading: boolean;
};

const data: Data[] = [
  {
    cell: 2,
    presentation: 'slideshow',
    preloading: true
  },
  {
    cell: 3,
    presentation: 'static',
    preloading: true
  },
  {
    cell: 4,
    presentation: 'slideshow',
    preloading: false
  },
  {
    cell: 5,
    presentation: 'static',
    preloading: false
  }
];
```
