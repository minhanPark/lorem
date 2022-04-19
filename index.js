module.exports = function lorem(number) {
  if (typeof number !== "number") throw new TypeError("lorem wants a number");
  if (number >= 4444) return "lorem wants a number lower than 4444";
  const basicString =
    "Running Water Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ";
  let count = 0;
  let str = "";
  while (count < number) {
    str = str + basicString[count % basicString.length];
    count++;
  }
  return str;
};
