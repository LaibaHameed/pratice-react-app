"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const courses = () =>{
    const [users , setUsers] = useState([]);
    useEffect(() => {
        getUsers();
      }, []);
    const getUsers = async () =>{
        try {
        const userData = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = userData.data;
        console.log(data)
        setUsers(data)
        } catch (error) {
            console.log(error)
        }
    } 
    return(
        <>
        <button onClick={getUsers}> get Data </button>
        <div id="userBox">
        <ol>
        {users.map((e) => {
          return (
            <>
            <li key={e.id}><span><b>Name:</b> {e.name}</span> <span><b>Email:</b> {e.email}</span>  <span><b>User Name:</b> {e.username}</span> <Link href={`/${e.id}`}> Explore </Link></li>
            </>
          );
        })}
        </ol>
      </div>
        </>
    )
}

export default courses