"use client";

import React, { useState, useEffect, useContext } from "react";
import { ToDoListContext } from "./context/ToDoListApp";

const page = () => {
  const { checkIfWalletIsConnect } = useContext(ToDoListContext);
  useEffect(() => {
    checkIfWalletIsConnect;
  }, []);
  return <div>Home</div>;
};

export default page;
