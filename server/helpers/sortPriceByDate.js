import Event from "../models/Event.js";

export const sortPriceByDate = async (id) => {
  const result = await Event.findById(id).select("paymentsNew");
  const dataResult = result.paymentsNew;

  const currentDate = new Date();

  const parseDate = (dateString) => new Date(dateString);

  const futurePaymentDates = dataResult.filter(
    (item) => parseDate(item.paymentDate) >= currentDate
  );

  futurePaymentDates.sort((a, b) => {
    const dateA = parseDate(a.paymentDate);
    const dateB = parseDate(b.paymentDate);
    return dateA - dateB;
  });

  const nearestPaymentDatePrice = futurePaymentDates[0].price;
  return Number(nearestPaymentDatePrice);
};
