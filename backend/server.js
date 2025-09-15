import { app } from "./src/app.js";
import logger from "./src/utils/logger.js";
import dotenv from "dotenv";
import connectDB from "./src/db/index.js"

dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectDB();
  logger.info(`Server running on http://localhost:${PORT}`);
});
