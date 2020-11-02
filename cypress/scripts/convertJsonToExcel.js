const fs = require("fs");
const XLSX = require("xlsx");

try{
    const workBook = XLSX.readFile("./cypress/fixtures/StoresZipCodes.xlsx");
    console.log(workBook.Sheets);

    const jsonData = XLSX.utils.sheet_to_json(workBook.Sheets.StoresCitiesList);

    if(!jsonData){ throw new Error("no data avaialble")}
    fs.writeFileSync(
        "./cypress/fixtures/testData.json",
        JSON.stringify(jsonData[0], null, 2),
        "utf-8"
        );
    }catch(e){
        throw Error(e);
  }