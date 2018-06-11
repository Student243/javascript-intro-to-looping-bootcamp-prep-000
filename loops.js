function forLoop(array) {
  array = [...array];
for (let i = 0; i < 25; i++) {
  array.push(`I am ${i} strange loop${i === 1 ? '' : 's'}.`);
 }
 return array
}
function whileLoop(n) {
  let countdown = 100;
  while (n > 0) {
    console.log (--n)
  }
  return `done`
}
function doWhileLoop(array) {
  do {
    array.pop()
  } while (maybeTrue())
}
function maybeTrue(array) {
  return array.length > 0 && maybeTrue()
}
  do {
  console.log(element)
  } while (doWhileLoop());