import axios from "axios";
import {API_KEY} from "@env"


export const API = (() => {

  const nyTimeMosPopular = async (section,timePeriod) => {
    return await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/${section}/${timePeriod}.json?api-key=${API_KEY}`);
  };


  return {
    NYTimes: {
      mostPopular: nyTimeMosPopular,
    },
  };
})();
