export const sortArrayOfEventsByDateAndTime = (a, b) => {
  // let currentData
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
 

  if (dateA.getTime() < dateB.getTime()) {
    return -1;
  } else if (dateA.getTime() > dateB.getTime()) {
    return 1;
  } else {
    // Если даты равны, то сортируем по времени
    const timeA = new Date(a.date + " " + a.time);
    const timeB = new Date(b.date + " " + b.time);

    if (timeA.getTime() < timeB.getTime()) {
      return -1;
    } else if (timeA.getTime() > timeB.getTime()) {
      return 1;
    } else {
      // Если время также равно, то оставляем элементы в текущем порядке
      return 0;
    }
  }
}