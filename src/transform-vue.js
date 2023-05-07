import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import compiler from 'vue-template-compiler'
import { parse } from '@babel/parser'
import { transformSync } from '@babel/core'
import { transformVue } from './plugins/transform-vue.js'

// 1. 读取 vue 文件
const __dirname = dirname(fileURLToPath(import.meta.url))
const fileName = join(__dirname, './examples/vue/BaseOption.vue')
const code = readFileSync(fileName, 'utf-8')
// console.log(code);

// 2. 解析 script 部分
const sfc = compiler.parseComponent(code)
const scriptContent = sfc.script.content
// console.log(sfc.script.content)

// 3. 使用 babel 处理 script 部分
// const ast = parse(scriptContent, { sourceType: "module" });
// console.log(ast.program.body);
const res = transformSync(scriptContent, {
  sourceType: 'module',
  plugins: [transformVue],
})

console.log(res.code)
