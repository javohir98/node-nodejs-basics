import { readdirSync } from "node:fs";

const list = async () => {
  try {
    const filenames = readdirSync("files");

    if (filenames.length === 0) {
      throw Error("FS operation failed");
    }

    filenames.forEach((file) => {
      console.log(file);
    });
  } catch (err) {
    console.error("Error reading directory:", err);
  }
};

await list();
