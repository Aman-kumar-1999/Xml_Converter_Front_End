import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import baseUrl from '../../../helper/helper';
import { toast } from 'react-toastify';
import { getCurrentUserDetail, getToken } from '../../../auth';
import { BASE_URL, privateAxios } from '../../../helper/helper';
import { loadAllXsd } from '../../../services/xsd-service';
import { NavLink } from 'react-router-dom';

import '../../css/Dashboard.css';

function Dashboard() {

    // const xsd = [];
    //xsd = JSON.parse(localStorage.getItem('XSD'));

    const [xsd, setXsd] = useState([]);

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        //setXsd(JSON.parse(localStorage.getItem("XSD")));


    }, []);

    //   const fetchData = async () => {
    //   const apiUrl = 'https://api.example.com/data';
    //   const token = 'yourAccessToken'; // Replace with your actual access token

    //   try {
    //     const response = await fetch(`${BASE_URL}/xsd/`, {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': `Bearer ${getToken()}`,
    //         'Content-Type': 'application/json',
    //         // You may need to include other headers depending on the API requirements
    //       },
    //     });

    //     if (!response.ok) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     const result = await response.json();
    //     localStorage.setItem('xsd',JSON.stringify(result));
    //     setXsd(result);
    //     console.log("CCC : "+xsd);
    //     console.log("DD : "+JSON.parse(localStorage.getItem('xsd')));
    //   } catch (error) {
    //     console.log(error.message)
    //     setError(error.message);
    //   }
    // };



    useEffect(() => {
        return () => {

            console.log("HHH")
            loadAllXsd().then(data => {
                // const JsonData = JSON.parse(JSON.stringify(data));
                setXsd(data)
                //localStorage.setItem("XSD",JSON.stringify(data));
                // setXsd(JSON.parse(localStorage.getItem('XSD')));
                // this.xsd = JSON.parse(localStorage.getItem('XSD'));
                // console.log("XSD : "+xsd);
            }).catch(error => {
                console.log(error);
                toast.error("Error in loading xsd")

            })
        }
    }, [])

    console.log("DDD : XSD : " + xsd);

    // const fun = async() => {
    //     // console.log("HHH")
    //     // loadAllXsd().then(data => {
    //     //     // const JsonData = JSON.parse(JSON.stringify(data));
    //     //     // setXsd(JsonData)
    //     //     setXsd(data)

    //     //     //console.log("XSD : "+xsd[0].xsdName);

    //     // }).catch(error => {
    //     //     console.log(error);
    //     //     toast.error("Error in loading xsd")

    //     // })

    //     await axios.get(`${BASE_URL}/xsd/`, {

    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${getToken()}`, // Replace with your actual access token
    //             'Access-Control-Allow-Origin': '*'
    //         }
    //     },
    //     ).then(response =>{
    //         const responseData = response.data;
    //             setXsd(responseData);
    //             console.log('XSD : '+xsd);
    //     }).catch(error => {
    //         console.log(error);
    //     });

    // }




    return (
        <>
            <label className="label" aria-hidden="true">Select XSD</label>

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">

                {
                    xsd.map((item, index) =>
                    (
                        <>
                            <div key={index} className="col ">
                                <NavLink className="card xsd-card">

                                    <div className="card-body">
                                        <h5 className="card-title">{item.xsdName}</h5>
                                        <p className="card-text">
                                            <i><b>XSD File Name :</b></i> {item.fileName}
                                        </p>
                                    </div>
                                </NavLink>
                            </div>

                        </>

                    )


                    )
                }
            </div>

        </>
    )
}

export default Dashboard;
