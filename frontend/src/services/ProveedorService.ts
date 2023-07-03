import axios from 'axios';

const url = 'http://gateway-service:8080/proveedor';

class ProveedoresService {
  obtenerProveedores() {
    return axios.get(url);
  }

  guardarProveedor(codigo: string, nombre: string, categoria: string, retencion: string) {
    return axios.post(`${url}?codigo=${codigo}&nombre=${nombre}&categoria=${categoria}&retencion=${retencion}`);
  }
}

const instance = new ProveedoresService();
export default instance;