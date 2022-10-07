export class IOCContainer {

  private static beans: Map<string, any> = new Map();

  private static injectBean(beanName: string, instance: any) {
    this.beans.set(beanName, instance);
  }

  public static getBean(object: any): any {
    const beanName = object.name;
    if (this.beans.has(beanName)) {
      console.log("Found bean: ", beanName)
      return this.beans.get(beanName);
    }
    console.log("Create new bean: ", beanName)
    const instance = new object();
    this.injectBean(beanName, instance);
    return instance;
  }
}