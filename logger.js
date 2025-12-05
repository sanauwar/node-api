import {
  format as _format,
  createLogger,
  transports as _transports,
} from "winston";
const { combine, timestamp, json } = _format;

const logger = createLogger({
  level: process.env.LOG_LEVEL || "info",
  format: combine(timestamp(), json()),
  transports: [
    new _transports.File({
      filename: "error.log",
    }),
  ],
});

export default logger;
