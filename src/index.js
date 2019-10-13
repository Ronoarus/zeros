module.exports = function zeros(expression) {
  let soloArray = [];
  let doubleArray = [];
  let countZeros = 0;
  let five = 0;
  for (let k of expression.split("*")) {
    if (k.indexOf('!!') != -1) {
      doubleArray.push(k.substr(0, k.length - 2));
    } else soloArray.push(k.substr(0, k.length - 1));
  }
  if (soloArray.length == 0) {
    let flag = false;
    for (let r of doubleArray) if (!(r & 1)) flag = true;
    if (!flag) return 0;
  }
  for (let k of soloArray) {
    let temp = 5;
    while (temp <= k) {
      countZeros += Math.trunc(k / temp);
      temp = temp * 5;
    }
  }
  for (let k of doubleArray) {
    if (k % 2 == 0) {
      let temp = 10;
      while (temp <= k) {
        countZeros += Math.trunc(k / temp);
        temp = temp * 5;
      }
    } else {
      for (let i = k; i >= 0; i -= 2) {
        let temp = i;
        while (temp % 5 == 0) {
          temp = temp / 5;
          five++;
        }
      }
    }
  }
  return countZeros + five;
};
