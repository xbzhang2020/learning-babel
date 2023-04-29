import { transformSync } from "@babel/core";
// import { transformParamV2 } from "./plugins/transform-param.js";
import { transformBinary } from "./plugins/transform-binary.js";

const code = `
function square(n) {
    return n * n;
}
`;

const code2 = `foo === bar;`;

const res = transformSync(code, {
  plugins: [transformBinary],
});

console.log(res.code);
