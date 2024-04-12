import axios from "axios";

export const getJoke = async () => {
  const {data} = await axios.get("https://api.chucknorris.io/jokes/random");
  console.log(data.value);
  return data.value;
}