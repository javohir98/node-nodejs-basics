import { existsSync, promises as fs } from "fs";
import { join } from "path";

const filePath = join("files", "fileToRemove.txt");

const remove = async () => {
  if (!existsSync(filePath)) {
    throw Error("FS operation failed");
  }
  await fs.unlink(filePath);
};

await remove();
