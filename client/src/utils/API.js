import axios from "axios";

const API = {
  sendEmail: (from, name, subject, message) => {
    return axios.post('/api/contact', { from, name, subject, message });
  }
};

export default API;