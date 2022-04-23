
export const toFaNumber = (str) => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    for (var i = 0; i < 10; i++) {
      str = String(str)?.replace(/\d/g, (x) => farsiDigits[x]);
    }
    return str;
  };
  
  export const toEnNumber = (str) => {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  
    for (var i = 0; i < 10; i++) {
      str = String(str)?.replace(farsiDigits[i], i).replace(arabicDigits[i], i);
    }
    return str;
  };
  
  export function numberCommaSplitter(num) {
    return Number(Math.floor(num).toFixed(0))
      .toLocaleString()
      .split(/\s/)
      .join(",");
  }
  