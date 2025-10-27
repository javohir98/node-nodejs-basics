import { existsSync, promises as fs } from "fs";
import { join } from "path";

const filePath = join("files", "wrongFilename.txt");

const rename = async () => {
  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  }
  await fs.rename(filePath, join("files", "properFilename.md"));
};

await rename();
