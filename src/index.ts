// import World from "./world";

// const root = document.getElementById("root");
// const world = new World("Hello world!!");

// world.sayHello(root);

import { logMessage } from "./function/basic";
import {
  isUserSignedIn,
  isUserSignedIn2,
  sumProductPrice,
} from "./function/parameters";

logMessage("Hello TypeScript");
isUserSignedIn("ABC", "さとう");
isUserSignedIn("DEF");
isUserSignedIn2("ABC");
const sum = sumProductPrice(100, 200, 300, 400, 500);
console.log("Function parameters sample5", sum);
