import _ from "lodash";

export function getRandomColor() {
  const base = "0123456789abcdef";
  let output = "";
  for (let i = 0; i < 6; i++) {
    const index = _.random(0, base.length - 1);
    output += base[index];
  }
  return `#${output}`;
}
