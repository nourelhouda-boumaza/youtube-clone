import axios from 'axios';

const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': '6c2ba05e44msh2457f22c78142d2p1a4fddjsnee18973fe690',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI= async(url) =>{
  const {data}=await axios.get(
    `${BASE_URL}/${url}`,
    options
  )
  return data;
}
