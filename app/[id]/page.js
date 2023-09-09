"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const {id} = params;

    const [users , setUsers] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
    const getUsers = async () =>{
        try {
        const userData = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
        const data = userData.data;
        setUsers(data)
        } catch (error) {
            console.log(error)
        }
    } 

  return ( 
    <div>
        {/* <p className='users'> <b>User Name: </b>{users}</p> */}
        <p className='users'> {JSON.stringify(users)}</p>
    </div>
  )
}
export default page