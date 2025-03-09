import { comma, floor, math } from "@ma9pie/math";

// 단위
const UNITS = ["K", "M", "G", "T", "P", "E", "Z", "Y"];

/**
 * 숫자를 받아 국제단위계로 변환
 * @param num format할 number
 * @param digits 소수점 자릿수
 * @returns ex) 694.850123 -> 694.85k
 */
export const compactNumber = (
  num: number | string,
  digits = 2
): string | number => {
  // 숫자가 아닐 경우
  if (isNaN(Number(num))) {
    return num;
  }

  // 값이 0일 경우
  if (Number(num) === 0) {
    return 0;
  }

  // 결과값
  let result = math(num);
  // 단위
  let unit = "";

  UNITS.map((item) => {
    // 단위 UP
    if (math(result.value()).abs().gte(1000)) {
      result = result.div(1000);
      unit = item;
    }
  });

  // 최대 단위를 넘어설 경우
  if (unit === UNITS[UNITS.length - 1] && result.gt(1000)) {
    return `>${comma(1000)}${unit}`;
  }

  // 포맷팅
  const formattedValue = comma(floor(result.value(), digits));

  return `${formattedValue}${unit}`;
};
