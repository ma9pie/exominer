import { comma, floor, math } from "@ma9pie/math";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const UNITS = ["K", "M", "B", "T", "P", "E", "Z", "Y", "R", "Q"];

export const compactNumber = (
  num: number | string,
  digits = 2
): string | number => {
  if (isNaN(Number(num))) {
    return num;
  }

  if (Number(num) === 0) {
    return 0;
  }

  let result = math(num);
  let unit = "";

  UNITS.map((item) => {
    if (math(result.value()).abs().gte(1000)) {
      result = result.div(1000);
      unit = item;
    }
  });

  if (unit === UNITS[UNITS.length - 1] && result.gt(1000)) {
    return `>${comma(1000)}${unit}`;
  }

  const formattedValue = comma(floor(result.value(), digits));

  return `${formattedValue}${unit}`;
};

export const formatDuration = (seconds: number) => {
  const duration = dayjs.duration(seconds, "seconds");
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const secs = duration.seconds();

  let result = "";

  if (days > 0) result += `${days}일 `;
  if (hours > 0) result += `${hours}시간 `;
  if (minutes > 0) result += `${minutes}분 `;
  if (secs > 0 || result === "") result += `${secs}초`;

  return result.trim();
};
