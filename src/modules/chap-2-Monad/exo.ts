import * as fs from "fs";
import * as E from './monad'

/*
Transform this functions to be written in a functional way
*/

// 1 ---------- 
// get the color from the name and make it uppercase and slice the # char
// if the color is not found return 'no color'
const findColor = (name: string) =>
  ({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]);

export const findColorFP = (name: string) => E.fromNullable(({ red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name]));

// 2 --------- 
const getPort = () => {
    try {
      const str = fs.readFileSync("config.json");
      const config = JSON.parse(Buffer.from(str).toString());
      return config.port;
    } catch (e) {
      return 5000;
    }
  };

export const getPortFP = () => {};