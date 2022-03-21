export const binarySearch = (
  sortedArr: Array<number>,
  numberToFind: number
): boolean => {
  let start = 0;
  let end = sortedArr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (sortedArr[mid] === numberToFind) return true;
    else if (sortedArr[mid] < numberToFind) start = mid + 1;
    else end = mid - 1;
  }

  return false;
};
