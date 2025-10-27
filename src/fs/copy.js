import { existsSync } from "fs";
import { cp } from "node:fs/promises";

const copy = async () => {
  if (!existsSync("files_copy")) {
    try {
      await cp("files", "files_copy", { recursive: true });
    } catch (err) {
      console.error("Error copying folder:", err);
    }
  } else {
    throw Error("FS operation failed");
  }
};

await copy();
