const { createLogger, format, transports } = require("winston");
const { combine, timestamp, printf } = format;

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp}-[${level.toUpperCase()}]-${message}`;
});

const logger = createLogger({
  format: combine(timestamp({ format: "MM-DD-YYYY:hh-mm-ss" }), myFormat),
  transports: [
    new transports.File({
      filename: "./service/log/log",
      maxsize: 5242880,
    }),
  ],
});
module.exports = logger;
