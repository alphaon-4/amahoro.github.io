import React, { createContext, useState, useContext } from 'react';

export const SubscriptionContext = createContext();

export const SubscriptionProvider = ({ children }) => {
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  const selectSubscription = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const clearSubscription = () => {
    setSelectedSubscription(null);
  };

  return (
    <SubscriptionContext.Provider value={{ selectedSubscription, selectSubscription, clearSubscription }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => useContext(SubscriptionContext);