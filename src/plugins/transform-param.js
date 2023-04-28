/**
 * 将函数参数 n 转换为 x
 */

// 会将函数之外的参数也进行转换
export const transformParam = () => {
  let paramName;
  return {
    visitor: {
      FunctionDeclaration(path) {
        const param = path.node.params[0];
        paramName = param.name;
        param.name = "x";
      },

      Identifier(path) {
        if (path.node.name === paramName) {
          path.node.name = "x";
        }
      },
    },
  };
};

export const transformParamV2 = () => {
  const updateParamNameVisitor = {
    Identifier(path) {
      if (path.node.name === this.paramName) {
        path.node.name = "x";
      }
    },
  };
  return {
    visitor: {
      FunctionDeclaration(path) {
        const param = path.node.params[0];
        const paramName = param.name;
        param.name = "x";

        path.traverse(updateParamNameVisitor, { paramName });
      },
    },
  };
};
