import template from '@babel/template'
import generate from '@babel/generator'

export const transformVue = ({ types: t }) => {
  return {
    visitor: {
      ExportDefaultDeclaration(path) {
        // console.log(path.node.declaration)
        // console.log(path.get('declaration'))

        const ast = template.default(`defineComponent(SOURCE)`)({
          SOURCE: path.node.declaration,
        })
        // console.log(generate.default(ast).code)
        path.get('declaration').replaceWith(ast)
      },
    },
  }
}
