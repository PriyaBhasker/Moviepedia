import axios from "axios";

//https://www.omdbapi.com/?i=tt3896198&apikey=bd7eb76

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "bd7eb76";
export const getMovieInformation = async (searchText) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&s=${searchText}`
    );

    // console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};
