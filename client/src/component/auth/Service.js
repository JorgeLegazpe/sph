import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000/auth",
      withCredentials: true
    });
  }

  signup = user => {
    return this.service.post("/signup", user).then(response => response.data);
  };

  signupPro = pro => {
    return this.service.post("/signupPro", pro).then(response => response.data);
  };

  login = (email, password, rol) => {
    return this.service
      .post("/login", {
        email,
        password,
        rol
      })
      .then(response => response.data);
  };

  loggedin = () => {
    return this.service.get("/currentUser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => response.data);
  };
}
