export type Mergeable<T, U> = T & U;

export const merge = <T, U>(
  arr1: T[],
  arr2: U[],
  maxLength?: number,
): Mergeable<T, U>[] => {
  const mergedArray: Mergeable<T, U>[] = [];
  const _maxLength = maxLength ?? Math.max(arr1.length, arr2.length);

  for (let i = 0; i < _maxLength; i++) {
    if (i < arr1.length) {
      mergedArray.push(arr1[i] as Mergeable<T, U>);
    }
    if (i < arr2.length) {
      mergedArray.push(arr2[i] as Mergeable<T, U>);
    }
  }

  return mergedArray;
};

export const arrayForm = (total: number) => Array.from(Array(total).keys());
