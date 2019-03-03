import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  signup = user => {
    return this.service
      .post("/auth/signup", user)
      .then(response => response.data);
  };

  signupPro = pro => {
    return this.service
      .post("/auth/signupPro", pro)
      .then(response => response.data);
  };

  login = (email, password, rol) => {
    return this.service
      .post("/auth/login", {
        email,
        password,
        rol
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service
      .get("/auth/currentUser")
      .then(response => response.data);
  };

  logout = () => {
    return this.service.get("/auth/logout").then(response => response.data);
  };

  search = () => {
    return this.service
      .get("/works/profesionales")
      .then(response => response.data);
  };
}
