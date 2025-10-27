import { existsSync, promises as fs } from "fs";
import { join } from "path";

const filePath = join("files", "fresh.txt");

const create = async () => {
  if (existsSync(filePath)) {
    throw Error("FS operation failed");
  }
  await fs.writeFile(filePath, "I am fresh and young");
};

await create();
