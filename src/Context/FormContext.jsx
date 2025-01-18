// src/contexts/FormContext.js

import React, { createContext, useState, useContext } from 'react';
import { use } from 'react';

const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: ''
  });

  // console.log(formData, "contextForm")
  const [address, setAddress] = useState("");
  const [postDropDown, setPostDropDown] = useState("");


  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, setAddress, address, postDropDown, setPostDropDown }}>
      {children}
    </FormContext.Provider>
  );
};
