// src/contexts/FormContext.js

import { createContext, useState, useContext } from 'react';


const FormContext = createContext();

export const useFormContext = () => {
  return useContext(FormContext);
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    mobile: ''
  });


  const [address, setAddress] = useState("");
  const [postDropDown, setPostDropDown] = useState({});


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
