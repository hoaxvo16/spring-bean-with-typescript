var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var import_JSONPlaceHolderService = __toModule(require("./beans/JSONPlaceHolderService"));
var import_IOCContainer = __toModule(require("./ioc/IOCContainer"));
class SeaApp {
  service = import_IOCContainer.IOCContainer.getBean(import_JSONPlaceHolderService.JSONPlaceHolderService);
  main() {
    console.log(this.service.getTodo());
  }
}
class MountainApp {
  service = import_IOCContainer.IOCContainer.getBean(import_JSONPlaceHolderService.JSONPlaceHolderService);
  main() {
    console.log(this.service.getTodo());
  }
}
const seaApp = new SeaApp();
const mountainApp = new MountainApp();
seaApp.main();
mountainApp.main();
//# sourceMappingURL=index.js.map
