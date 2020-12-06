const convertDate = (date) => {
  // epoch time
  let formatedDate = "";
  const newDate = new Date(date); // converting the epoch number into a Date object.
  // .toIsoString, getDay, getHours
  // formatedDate = `Day/mont/year - HH: MM: S`
  formatedDate = `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()} - ${newDate.getHours()} : ${newDate.getMinutes()}`;
  return formatedDate;
};

export default convertDate;
