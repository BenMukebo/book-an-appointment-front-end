import axios from 'axios';

const baseUrl = 'https://book-doctor-appointment2.herokuapp.com';

export const fetchDoctors = async () => {
  try {
    const response = await axios.get(`${baseUrl}/doctors/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getDetailDoctor = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/doctors/?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const fetchReservations = async (userid) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userid}/reservations`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const ONEReservation = async (userid, id) => {
  try {
    const response = await axios.get(`${baseUrl}/users/${userid}/reservations/${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};
