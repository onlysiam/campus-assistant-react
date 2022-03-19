const fs = require("fs");
const ocrFunc = require("../functions/ocrFunc");
const { createWorker } = require("tesseract.js");
const { usersCoursesFinder } = require("../functions/dataFinder");

module.exports = async function (file, semester) {
  file.mv("./ocr/uploads/" + file.name);
  const path = `./ocr/uploads/${file.name}`;
  const text = await ocrWorker(path);

  let data = ocrFunc.dataArrayMaker(text);
  if (data) {
    let dataObj = ocrFunc.dataArrayMarker(data);

    if (dataObj.courses.length > 0) {
      dataObj = await usersCoursesFinder(dataObj, semester);
      return dataObj;
    } else {
      return ocrFunc.dataArrayMarkerV2(data);
    }
  } else return "unrecognized data";
};

async function ocrWorker(path) {
  const worker = createWorker();
  await worker.load();
  await worker.loadLanguage("eng");
  await worker.initialize("eng");
  const {
    data: { text },
  } = await worker.recognize(path);
  await worker.terminate();
  fs.unlinkSync(path);
  return text;
}
