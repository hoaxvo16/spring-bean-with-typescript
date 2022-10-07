var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
__export(exports, {
  IOCContainer: () => IOCContainer
});
class IOCContainer {
  static beans = new Map();
  static injectBean(beanName, instance) {
    this.beans.set(beanName, instance);
  }
  static getBean(object) {
    const beanName = object.name;
    if (this.beans.has(beanName)) {
      console.log("Found bean: ", beanName);
      return this.beans.get(beanName);
    }
    console.log("Create new bean: ", beanName);
    const instance = new object();
    this.injectBean(beanName, instance);
    return instance;
  }
  static deleteBean(beanName) {
    this.beans.delete(beanName);
  }
  static getBeans() {
    return this.beans;
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  IOCContainer
});
//# sourceMappingURL=IOCContainer.js.map
