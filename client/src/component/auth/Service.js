import axios from "axios";

export default class Service {
  constructor() {
    this.service = axios.create({
      baseURL: "https://solucionesph.herokuapp.com/",
      withCredentials: true
    });
  }

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

  createRelation = (idUser, idPro) => {
    return this.service
      .post("/works/profesionales", { idUser, idPro })
      .then(response => response.data);
  };

  findRelationUser = relation => {
    return this.service
      .get("/works/perfiluser", relation)
      .then(response => response.data);
  };

  findRelationPro = relation => {
    return this.service
      .get("/works/perfilpro", relation)
      .then(response => response.data);
  };
}
