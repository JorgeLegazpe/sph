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

  login = (email, password, rol) => {
    return this.service
      .post("/login", {
        email,
        password,
        rol
      })
      .then(response => response.data);
  };
}
