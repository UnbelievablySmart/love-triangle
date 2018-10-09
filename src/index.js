/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount( preferences = [] ) {
  let count = 0;

  for (let i = 0; i < preferences.length; i++){
      let firstPassionate = preferences[i] - 1;
      let secondPassionate = preferences[firstPassionate] - 1;
      let thirdPassionate = preferences[secondPassionate];

      if ( (thirdPassionate === i + 1) && (firstPassionate !== i) ) {
          count++;
      }
  }

  return count/3;
}