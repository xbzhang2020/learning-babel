import parser from "@babel/parser";
import generate from "@babel/generator";

const code = `function square(n) {
  return n * n;
}`;

const ast = parser.parse(code);

const res = generate.default(ast, {}, code);

console.log(res);
