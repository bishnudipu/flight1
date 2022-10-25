import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const url = "https://api.spacexdata.com/v3/launches/";

  const fetchData = async () => {
    const response = await fetch(url);

    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(product, "fromContext");
  return (
    <AppContext.Provider
      value={{
        product,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
