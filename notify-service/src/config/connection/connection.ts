import mongoose from "mongoose";
import config from "../env/index";

const MONGO_URI: string = `${config.database.MONGODB_URI}${config.database.MONGODB_DB_MAIN}`;

export const db: mongoose.Connection = mongoose.createConnection(MONGO_URI);

// handlers
db.on("connecting", () => {
  console.log("\x1b[32m", "MongoDB :: connecting");
});

db.on("error", (error: string) => {
  console.log("\x1b[31m", `MongoDB :: connection ${error}`);
  mongoose.disconnect();
});

db.on("connected", () => {
  console.log("\x1b[32m", "MongoDB :: connected");
});

db.once("open", () => {
  console.log("\x1b[32m", "MongoDB :: connection opened");
});

db.on("reconnected", () => {
  console.log('\x1b[33m"', "MongoDB :: reconnected");
});

db.on("reconnectFailed", () => {
  console.log("\x1b[31m", "MongoDB :: reconnectFailed");
});

db.on("disconnected", () => {
  console.log("\x1b[31m", "MongoDB :: disconnected");
});

db.on("fullsetup", () => {
  console.log('\x1b[33m"', "MongoDB :: reconnecting... %d");
});
