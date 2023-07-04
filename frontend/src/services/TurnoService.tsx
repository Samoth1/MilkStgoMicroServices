import axios from 'axios';

const url = 'http://localhost:8080/turno';

class TurnoService {
    subirTurno(acopio: any) {
    return axios.post(`${url}/file`, acopio);
  }
}

const instance = new TurnoService();
export default instance;