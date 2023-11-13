
import axios from 'axios'
import {baseUrl} from './Constants/constants'
const instances=axios.create({
  baseURL:baseUrl,
});

export default instances;