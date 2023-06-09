import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "url";
import { transformSync } from "@babel/core";
import parser from "@babel/parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = join(__dirname, "./examples/index.ts");

const code = readFileSync(fileName, "utf-8");

// const res = transformSync(code, {
//   presets: ["@babel/preset-typescript"],
//   filename: "script.ts",
// });

// const res = transformSync(code, {
// plugins: ["@babel/plugin-transform-typescript"],
// });
// console.log(res);
// console.log(res.code);

const res = parser.parse(code, {
  sourceType: "module",
  plugins: ["typescript"],
});

console.log(res.program.body[0]);
