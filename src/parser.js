import parser from "@babel/parser";

const code = `function square(n) {
    return n * n;
}`;

const res = parser.parse(code);

console.log(res);
