import axios from 'axios';

const url = 'http://localhost:8080/proveedor';

class ProveedoresService {
  obtenerProveedores() {
    return axios.get(url);
  }

  nuevoProveedor(codigo: string, nombre: string, categoria: string, retencion: string) {
    const proveedor = {
      codigo: codigo,
      nombre: nombre,
      categoria: categoria,
      retencion: retencion
    };
    return axios.post(url, proveedor);
  }
}

const instance = new ProveedoresService();
export default instance;