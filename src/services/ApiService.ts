import axios, { Axios } from "axios";
import { ENV } from "../env";

export class ApiService {
  _client: Axios;

  constructor() {
    this._client = axios.create({
      baseURL: ENV.SERVER_URL,
    });

    // aqui podriamos configurar interceptores para incluir access tokens a la peticion
    // this._client.interceptors.request.use((config) => {...

    // o tambien interceptores de respuesta, por si la peiticion falla por un 401 reintentar la peticion
    // o refrescar el token de acceso si este ha caducado
    // this._client.interceptors.response.use((response) => {...
  }
}
