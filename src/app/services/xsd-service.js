import { getToken } from "../auth";
import { privateAxios } from "../helper/helper";


export const loadAllXsd = () => {
    return privateAxios
      .get(
        `/xsd/`
        // , {
        //     headers: {
        //       'Authorization': `Bearer ${getToken()}`,
        //       'Content-Type': 'application/json',
        //       'Access-Control-Allow-Origin': '*', // Set this header if needed
        //     },
        //   }
      )
      .then((response) => response.data);
  };