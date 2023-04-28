import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

const res = traverse.default(ast, {
  FunctionDeclaration: function (path) {
    path.node.id.name = "x";
  },
});
