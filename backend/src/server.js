import { app } from "./app.js";
import logger from "./utils/logger.js";
import dotenv from "dotenv";
import connectDB from "./db/index.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  logger.info(`Server running on http://localhost:${PORT}`);
});
