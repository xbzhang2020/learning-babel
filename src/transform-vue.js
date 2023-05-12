import { readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import compiler from 'vue-template-compiler'
import { parse } from '@babel/parser'
import { transformSync } from '@babel/core'
import { transformVue } from './plugins/transform-vue.js'

// 1. 读取 vue 文件
const __dirname = dirname(fileURLToPath(import.meta.url))
const fileName = join(__dirname, './examples/vue/class-base.vue')
const code = readFileSync(fileName, 'utf-8')

// 2. 解析 script 部分
const sfc = compiler.parseComponent(code)
const script = sfc.script
// console.log(sfc.script.content)

// 3. 使用 babel 处理 script 部分
// const ast = parse(script, { sourceType: "module" });
// console.log(ast.program.body);
const res = transformSync(script.content, {
  sourceType: 'module',
  plugins: [['@babel/plugin-proposal-decorators', { version: '2023-01' }]],
})
console.log(res.code)

// // 4. 输出结果
// const content = `${code.slice(0, script.start)}\n${replaceScript}\n${code.slice(script.end)}`
// console.log(content)
