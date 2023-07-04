import axios from 'axios';

const url = 'http://localhost:8080/leche';

class LecheService {
    subirLeche(acopio: any) {
    return axios.post(`${url}/file`, acopio);
  }
}

const instance = new LecheService();
export default instance;