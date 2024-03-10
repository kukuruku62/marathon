export const sortArrayOfEventsByDateAndTime = (a, b) => {
  const dateA = new Date(a.dateOfEvent);
  const dateB = new Date(b.dateOfEvent);

  if (dateA.getTime() < dateB.getTime()) {
    return -1;
  } else if (dateA.getTime() > dateB.getTime()) {
    return 1;
  } else {
    // If dates are equal sort by date
    const timeA = new Date(a.dateOfEvent + " " + a.timeOfStartEvent);
    const timeB = new Date(b.dateOfEvent + " " + b.timeOfStartEvent);

    if (timeA.getTime() < timeB.getTime()) {
      return -1;
    } else if (timeA.getTime() > timeB.getTime()) {
      return 1;
    } else {
      //If times also are equal don't change the order
      return 0;
    }
  }
};