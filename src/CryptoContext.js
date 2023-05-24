import React, { createContext } from 'react';

const Crypto = createContext();
const CryptoContext = ({ children, value }) => {
  return <Crypto.Provider value={value}>{children}</Crypto.Provider>;
};

export default CryptoContext;
