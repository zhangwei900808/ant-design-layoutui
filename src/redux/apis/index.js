import Request from "../../utils/request";

class Apis {
  getUsers = () => Request.get("/users");
}

export default new Apis();
