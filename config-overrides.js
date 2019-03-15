const {
  override,
  fixBabelImports,
  addDecoratorsLegacy
} = require("customize-cra");

module.exports = override(
  /**启动装饰器 */
  addDecoratorsLegacy(),
  /**配置antd */
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  })
);
