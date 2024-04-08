"use client";

import React, { useState, useEffect } from "react";
import Web3Modal from "web3modal";

import { toDoListAddress, toDoListABI } from "../context/constant";



const fetchContract = (web3) => {
    const contractInstance = new web3.eth.Contract(toDoListABI, toDoListAddress);
    return contractInstance;
  };
  

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
      console.log(account[0]);
    } else {
      setError("Please install metamask, reload and connect");
    }
  };

  // connect wallet

  const connectWallet = async () => {
    if (!window.ethereum) return setError("Please install metamask");

    const account = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setCurrentAccount(account[0]);
  };

  // Interacting with smart contract
  const toDoList = async (message) => {
    try {
        const web3modal = new Web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection)
    } catch (error) {
        setError("Something went wrong")
    }
  }

  return (
    <ToDoListContext.Provider value={{ checkIfWalletIsConnect, connectWallet }}>
      {children}
    </ToDoListContext.Provider>
  );
};
