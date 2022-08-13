export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export const checkRentedDate = (date, modalData) => {
  const twoWeeksAgo = new Date().setDate(new Date().getDate() - 14);
  const twoWeeksinMs = new Date().getTime() - twoWeeksAgo;
  const differenceSinceRented = new Date().getTime() - new Date(date).getTime();
  const isLate = differenceSinceRented >= twoWeeksinMs;
  if (isLate) {
    const oneDayInMs = 86400000;
    const daysLate = parseInt(differenceSinceRented / oneDayInMs) - 14;
    const lateFee = 0.01 * modalData.price * daysLate;
    return {
      lateFee: `${lateFee} $`,
      totalPayment: `${parseFloat(lateFee) + parseFloat(modalData?.price)} $`,
    };
  }
  return {
    lateFee: "0 $",
    totalPayment: `${modalData?.price} $`,
  };
};
