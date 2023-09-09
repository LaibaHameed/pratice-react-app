"use client"
import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Nav = () => {
    const notify = () => {
        toast ("navigation done")
    }
  return (
    <>
      <h4 onClick={notify}>navigation</h4>
      <ToastContainer/>
    </>
  );
};

export default Nav;
