import { transformSync } from "@babel/core";
import { transformParamV2 } from "./plugins/transform-param.js";

const code = `
function square(n) {
    return n * n;
}
n;
`;

const res = transformSync(code, {
  plugins: [transformParamV2()],
});

console.log(res.code);
