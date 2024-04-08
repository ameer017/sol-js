"use client";


import React, { useState, useEffect } from "react";
import Web3Model from "web3modal";

import { toDoListAddress, toDoListABI } from "../context/constant";
import { ethers } from "ethers";

const fetchContract = (signerOrProvider) =>
  new ethers.Contract(toDoListAddress, toDoListABI, signerOrProvider);

export const ToDoListContext = React.createContext();

export const ToDoListProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [error, setError] = useState("");
  const [allToDOList, setAllToDOList] = useState([]);
  const [myList, setMyList] = useState([]);

  const [allAddress, setAllAddress] = useState([]);

  //   connecting meta mask

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return setError("Please install metamask");

    const account = await window.ethereum.request({ method: "eth_accounts" });

    if (account.length) {
      setCurrentAccount(account[0]);
      console.log(account[0] )
    } else {
      setError("Please install metamask, reload and connect");
    }
  };

//   useEffect(() => {
//     checkIfWalletIsConnect();
//   }, []);

  return (
    <ToDoListContext.Provider value={{checkIfWalletIsConnect}}>{children}</ToDoListContext.Provider>
  );
};


