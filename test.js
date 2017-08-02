// function parseDate(template) {
//   let result = template;
//   const date = new Date();
//   const year = String(date.getFullYear());
//   const month = date.getMonth();
//   const dayNumber = date.getDate();
//   const formatShort = val => String(val).length === 1 ? `0${val}` : val;
//   const map = {
//     yyyy: year,
//     yy: year.slice(2),
//     MM: formatShort(month + 1),
//     dd: formatShort(dayNumber),
//   };
//
//   for (const key in map) {
//     if (map.hasOwnProperty(key)) {
//       const re = new RegExp(key, 'gi');
//       result = result.replace(re, map[key]);
//     }
//   }
//   return result;
// }
// parseDate('dd/MM/yyyy');
//
// var arr = [221, 2, 3, 4, 4, 4, 5, 6, 6, 7, 7, 7, 8, 3, 5, 10];
//
// Array.prototype.uniqe = function(){
//   this.splice(0, arr.length, ...new Set(this));
// }
// arr.uniqe(arr);
//
// Array.prototype.unique = function() {
//   const res = {};
//   let i = 0;
//
//   for (i; i < this.length; i++) {
//     if (res[this[i]]) {
//       this.splice(i, 1);
//       i--;
//     } else {
//       res[this[i]] = true;
//     }
//   }
// }
// var ss = [1,2,3,4,4,4,5,6,6,7,7,7,8,3,5,10];
// ss.unique();
// console.log(ss); //  [1, 2, 3, 4, 5, 6, 7, 8, 10]
function getMaxChar(str) {
  const unique = new Set(str.split(''));
  let maxChar;
  let maxCount = 0;

  [...unique].forEach((char) => {
    const occurrence = str.match(new RegExp(char, 'g')).length;
    if (maxCount < occurrence) {
      maxCount = occurrence;
      maxChar = char;
    }
  });

  return `${maxChar}=${maxCount}`;
}

getMaxChar('aabbb3');
