export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

  const reverse_col2 = collection_2.slice().reverse(); 

  const result: number[] = [];
  
  let index1 = 0, index2 = 0, index3 = 0;

  while (index1 < collection_1.length || index2 < reverse_col2.length || index3 < collection_3.length) {
      const val1 = index1 < collection_1.length ? collection_1[index1] : Infinity; //if out of bound, set to infinity to guarantee non min
      const val2 = index2 < reverse_col2.length ? reverse_col2[index2] : Infinity;
      const val3 = index3 < collection_3.length ? collection_3[index3] : Infinity;

      const min = Math.min(val1, val2, val3);

      if (min === val1) {
          result.push(val1);
          index1++;
      } else if (min === val2) {
          result.push(val2);
          index2++;
      } else {
          result.push(val3);
          index3++;
      }
  }

  return result;
}