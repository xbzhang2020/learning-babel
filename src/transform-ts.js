import { transformSync } from "@babel/core";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fileName = join(__dirname, "./examples/index.ts");

const code = readFileSync(fileName, "utf-8");

const res = transformSync(code, {
  presets: ["@babel/preset-typescript"],
  filename: "script.ts",
});

console.log(res.code);
