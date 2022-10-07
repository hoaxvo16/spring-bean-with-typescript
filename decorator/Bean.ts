import { IOCContainer } from "../ioc/IOCContainer";

export function Bean(object: any) {
  console.log("Constructor of bean: ", object.name, " run")
}