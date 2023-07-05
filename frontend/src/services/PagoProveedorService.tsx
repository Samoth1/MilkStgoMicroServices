import axios from 'axios';

const url = 'http://localhost:8080/pagoproveedor';

class PagoProveedorService {
    
    obtenerPago(proveedor: string, quincena: string) {
        return axios.get(`${url}/${proveedor}/${quincena}`);
    }

    generarPagos(){
        return axios.post(url);
    }

}

const instance = new PagoProveedorService();
export default instance;