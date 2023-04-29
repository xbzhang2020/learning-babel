import parser from "@babel/parser";

const code = `function square(n) {
    return n * n;
}`;

const code2 = "foo === bar";

const res = parser.parse(code2);

console.log(res.program.body[0].expression);
