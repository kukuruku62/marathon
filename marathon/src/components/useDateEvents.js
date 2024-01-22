import { useSelector } from "react-redux";

export function useDateEvents() {
  const status = useSelector((state) => state.events.status);

  const transformFormatOfDate = (date) => {
    if (status !== "resolved" || !date) {
      return "";
    }
    return date.split("-").reverse().join(".");
  };

  const renderSeasonOfEvent = (date) => {
    if (status !== "resolved" || !date) {
      return "";
    }
    const monthOfNextEvent = new Date(date).getMonth() + 1;

    if (monthOfNextEvent >= 3 && monthOfNextEvent <= 5) {
      return "SPRING";
    } else if (monthOfNextEvent >= 6 && monthOfNextEvent <= 8) {
      return "SUMMER";
    } else if (monthOfNextEvent >= 9 && monthOfNextEvent <= 11) {
      return "AUTUMN";
    } else {
      return "WINTER";
    }
  };

  return { transformFormatOfDate, renderSeasonOfEvent };
}
