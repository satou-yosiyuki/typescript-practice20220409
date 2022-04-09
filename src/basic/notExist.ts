export default function notExistSample() {
  let name = null;
  console.log("notExist sample 1:", typeof name, name);
  if (!name) {
    console.log("notExist sample 2:", typeof name, name);
  } else {
    console.log("notExist sample 3:", typeof name, name);
  }
  let age = undefined
  console.log("notExist sample 4:", typeof age, age)
  if (!age) {
    console.log("notExist sample 5:", typeof age, age);
  } else {
    console.log("notExist sample 6:", typeof age, age);
  }
}
