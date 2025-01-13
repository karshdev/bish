// src/contexts/FormContext.js

import React, { createContext, useState, useContext } from 'react';

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

  const [address, setAddress] = useState("");
  const [postValue, setPostValue] = useState("")
  const updateFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, setAddress, address, postValue, setPostValue }}>
      {children}
    </FormContext.Provider>
  );
};
