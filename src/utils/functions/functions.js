import EN_JSON from "../languages/EN.JSON";

//get component text
export function getComponentText(path) {
  const splittedPath = path.split(".");
  let answer = EN_JSON[`${splittedPath[0]}`];
  for (let i = 1; i < splittedPath.length; i++) {
    answer = answer[`${splittedPath[i]}`];
  }
  return answer;
}

//image file prefix
export function imageFilePrefix(imageUrl) {
  return `./images/${imageUrl}`;
}

//svg file prefix
export function svgFilePrefix(imageUrl) {
  return `./svg/${imageUrl}`;
}

//common file prefix
export function filePrefix(url, prefix) {
  return `.${prefix ? prefix : ""}${url}`;
}
