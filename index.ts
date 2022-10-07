import { JSONPlaceHolderService } from "./beans/JSONPlaceHolderService";
import { IOCContainer } from "./ioc/IOCContainer";

class SeaApp {
  private service: JSONPlaceHolderService = IOCContainer.getBean(JSONPlaceHolderService);
  main() {
    console.log(this.service.getTodo());
  }
}

class MountainApp {
  private service: JSONPlaceHolderService = IOCContainer.getBean(JSONPlaceHolderService);
  main() {
    console.log(this.service.getTodo());
  }
}


const seaApp = new SeaApp();

const mountainApp = new MountainApp();


seaApp.main();

mountainApp.main();