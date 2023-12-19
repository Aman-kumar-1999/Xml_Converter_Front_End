
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../../../helper/helper';
import { getToken } from '../../../auth';

export default function Home() {

  const [userName, setUserName] = useState([]);


  useEffect(() => {
    return() => {
fetchData();

       }

    
    
    
  }, [])

  const fetchData = async () => {
      // const apiUrl = 'https://api.example.com/data';
      // const token = 'yourAccessToken'; // Replace with your actual access token

      try {
        const response = await fetch(`${BASE_URL}/xsd/`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
            // You may need to include other headers depending on the API requirements
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result)
        setUserName(result);
        console.log("U: "+userName);
        // localStorage.setItem('xsd',JSON.stringify(result));
        // setXsd(result);
        // console.log("CCC : "+xsd);
        // console.log("DD : "+JSON.parse(localStorage.getItem('xsd')));
      } catch (error) {
        console.log(error)
        setError(error.message);
      }
    };

    console.log("USER: "+userName);

  return (
    <div>Role of User is :  </div>
  )
}
