export default function sortArray(arr) {
  arr.sort((a,b) => b.health - a.health);
  return arr;
}