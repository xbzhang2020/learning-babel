export const transformVue = ({ types: t }) => {
  return {
    visitor: {
      ExportDefaultDeclaration(path) {
        console.log(path.node);
      },
    },
  };
};
