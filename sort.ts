const _merge = (left: Array<number>, right: Array<number>): Array<number> => {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
};

export const mergeSort = (arr: Array<number>): Array<number> => {
  const midpoint = arr.length / 2;

  // Base case or terminating case
  if (arr.length < 2) {
    return arr;
  }

  const left = arr.splice(0, midpoint);
  return _merge(mergeSort(left), mergeSort(arr));
};

export const bubbleSort = (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const sortWordsAndNumbers = (
  arr: Array<number | string>
): Array<number | string> => {
  const stringArr = [];
  const numArr = [];

  arr.forEach((item: string | number) =>
    typeof item === "string" ? stringArr.push(item) : numArr.push(item)
  );

  return [
    ...numArr.sort((a, b) => a - b),
    ...stringArr.sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1)),
  ];
};
