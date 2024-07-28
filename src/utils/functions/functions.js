import EN_JSON from "../languages/EN.json";

//get component text
export function getComponentText(path) {
  const splittedPath = path.split(".");
  let answer = EN_JSON[`${splittedPath[0]}`];
  for (let i = 1; i < splittedPath.length; i++) {
    answer = answer[`${splittedPath[i]}`];
  }
  return answer;
}
