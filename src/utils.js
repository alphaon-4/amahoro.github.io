export const getSubscriptionPrice = (total, maintenanceFee) => {
  return (total / 12 + maintenanceFee).toFixed(2);
};