// i. getPersonalInfo
// ii.

import express, { response } from "express";
import fs from "fs";
import path from "path";

if (typeof __dirname === "undefined") {
  global.__dirname = path.resolve();
}

// No need of async and await as we are not using mongodb to fetch data
// Also no need of try and catch
const getPersonalInfo = (request, response) => {

  // console.log('Current directory:', __dirname);
  const filePath = __dirname + "\\personal-data\\personalData.json";

  try {
    const personalInfo = fs.readFileSync(filePath, "utf8"); //reads the content of personalInfo.json synchronously and returns it as a string.
    return response.status(200).json({ msg: "Data retrived", personalInfo });
  } catch (error) {
    return response.status(500).json({ msg: "Error retriving data", error });
  }
};


// app.post('/personal-info', (req, res) => {
//     const newPersonalInfo = req.body;

//     fs.writeFile('personalInfo.json', JSON.stringify(newPersonalInfo, null, 2), (err) => {
//       if (err) {
//         res.status(500).send('Error writing data');
//         return;
//       }
//       res.status(200).send('Personal information updated successfully');
//     });
//   });

export default getPersonalInfo;
