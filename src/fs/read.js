import { existsSync, promises as fs } from "fs";
import { join } from "path";

const filePath = join("files", "fileToRead.txt");

const read = async () => {
  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  }
  const data = await fs.readFile(filePath, "utf8");
  console.log(data);
};

await read();
