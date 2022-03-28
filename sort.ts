const _merge = (left: Array<number>, right: Array<number>): Array<number> => {
  // result arr
  let arr = [];
  while (left.length && right.length) {
    left[0] < right[0] ? arr.push(left.shift()) : arr.push(right.shift());
  }
  // concat
  return [...arr, ...left, ...right];
};

export const mergeSort = (arr: Array<number>): Array<number> => {
  // base case
  if (arr.length <= 1) return arr;
  // establish mid point to split arrays into 2
  const midPoint = arr.length / 2;
  const left = arr.splice(0, midPoint);
  // perform merge function on both halves of array
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
