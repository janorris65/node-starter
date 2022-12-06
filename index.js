import { copyFile, promises as fs } from "fs";

const data = await fs.readFile("users.json", "utf-8");
console.log(data);

fs.readFile("users.json", "utf-8").then((d) => {
  console.log(d);
});

await fs.writeFile("users-copy.json", data);
