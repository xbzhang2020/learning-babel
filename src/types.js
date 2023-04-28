import * as t from "@babel/types";
import * as parser from "@babel/parser";
import traverse from "@babel/traverse";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

// 校验节点
traverse.default(ast, {
  enter(path) {
    if (t.isIdentifier(path.node, { name: "n" })) {
      path.node.name = "x";
    }
  },
});

// 创建节点
const ast1 = t.identifier("zxb");
console.log(ast1);
