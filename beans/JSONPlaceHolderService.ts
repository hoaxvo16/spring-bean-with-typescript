import { Bean } from "../decorator/Bean";

@Bean
class JSONPlaceHolderService {
  public getTodo() {
    return "Todo resource"
  }
}

export { JSONPlaceHolderService };