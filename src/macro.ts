import type { ObjectExpression } from '@babel/types';
import type { MacroParams } from 'babel-plugin-macros';
import { createMacro, MacroError } from 'babel-plugin-macros';
import { getColumnNames, getRows } from './utils';

export default createMacro(tableMacro);

function tableMacro({ references, babel: { types: t } }: MacroParams) {
  const { default: defaultImport = [] } = references;

  function createObject(keys: string[], data: any[]): ObjectExpression {
    return t.objectExpression(keys.map((key, index) => t.objectProperty(t.identifier(key), data[index])));
  }

  defaultImport.forEach((referencePath) => {
    const taggedTemplatePath = referencePath.findParent((nodePath) => nodePath.isTaggedTemplateExpression());
    const taggedTemplateNode = taggedTemplatePath?.node;

    if (!taggedTemplatePath || !t.isTaggedTemplateExpression(taggedTemplateNode)) {
      throw new MacroError('Could not find the TaggedTemplateExpression.');
    }

    const templateLiteral = taggedTemplateNode.quasi;
    const columns = getColumnNames(templateLiteral.quasis[0]?.value.cooked);

    if (!columns) {
      throw new MacroError('Could not determine the column names from the table.');
    }

    const rows = getRows(templateLiteral.expressions, columns.length);
    const data = t.arrayExpression(rows.map((row) => createObject(columns, row)));

    taggedTemplatePath.replaceWith(data);
  });
}
