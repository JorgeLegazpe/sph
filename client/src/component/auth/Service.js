import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:5000",
      withCredentials: true
    });
  }

  // https://solucionesph.herokuapp.com/   baseURL: Para produccion

  signup = user => {
    return this.service
      .post("/auth/signup", user)
      .then(response => response.data);
  };

  signupPro = pro => {
    console.log(pro);
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

  createRelation = (user, profesional) => {
    console.log(user, profesional);
    return this.service
      .post("/works/profesionales", { user, profesional })
      .then(response => response.data);
  };

  findRelationUser = user => {
    return this.service
      .get("/works/perfiluser/" + user, { user })
      .then(response => response.data);
  };

  findRelationPro = user => {
    return this.service
      .get("/works/perfilpro/" + user, { user })
      .then(response => response.data);
  };
}
