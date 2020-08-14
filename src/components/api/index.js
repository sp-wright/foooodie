import axios from 'axios';

const url = `http://localhost:8008/`;

export const fetchData = async (city) => {
  try {
    const response = await axios.get(`${url}${city}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const callAuthorise = async (password) => {
  try {
    const response = await axios.post(`${url}login`, {
      password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
