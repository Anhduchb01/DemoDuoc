var dayjs = require("dayjs");


/**
 * 
 * @param {*} value 
 * @returns Nếu Value Bằng Null ,sẽ lấy thời gian hiện tại
 */
function CurrentTimeUtility(value) {
  let timeCrawlPage;
  if (value === undefined) {
    timeCrawlPage = dayjs().format("YYYY/MM/DD h:mm:ss");
  } else {
    timeCrawlPage = dayjs(value, "MMMM D, YYYY").format("YYYY/MM/DD");
  }
  return timeCrawlPage;
}

module.exports = CurrentTimeUtility;
