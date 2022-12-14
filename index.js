var addDays = require("date-fns/addDays");

const dates = new Date("22-Aug-2020");

const addingDays = (days) => {
  const date = addDays(dates, days);

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  if (month < 10) {
    return `${day}-0${month}-${year}`;
  } else {
    return `${day}-${month}-${year}`;
  }
};

module.exports = addingDays;
