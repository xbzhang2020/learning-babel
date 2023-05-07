# learning-babel

babel 核心流程：parse、transform、generate

babel 核心工具包：

- parser: 将 code 解析为 ast
- traverse: 遍历 ast，进行处理
- types: 工具库，方便处理（生成、校验等） ast
- template: 可以使用带有占位符的字符串构建 ast，而不用手动创建庞大的 ast
- generate: 根据 ast 生成新的 code


## vue 转换插件

