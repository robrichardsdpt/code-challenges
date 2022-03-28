export const binarySearch = (
  sortedArr: Array<number>,
  numberToFind: number
): boolean => {
  let start = 0,
    end = sortedArr.length - 1;

  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (sortedArr[mid] === numberToFind) return true;
    if (numberToFind < sortedArr[mid]) end = mid - 1;
    else start = mid + 1;
  }
  return false;
};
