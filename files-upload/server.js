const express = require("express");
const fileupload = require("express-fileupload");
const cors = require("cors");
const bodyParser = require('body-parser');
 
const app = express();

 
app.use(cors());
app.use(fileupload());
app.use(express.static("files"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



let fs = require('fs')

app.post("/uploadCoords", (req, res) => {

  let data = req.body.data;     //the coords file that is handled in the pythoninit
  
  // Data is on the form
  // {
  //   coordsJson: {
  //     name: '',
  //     ueList: [],
  //     eNBList: [],
  //     buildingList: [],
  //     mobileUeList: [],
  //   },
  //}
  //

  console.log(data);

  
  let lab = parseInt(data.label);          //which lab the topology comes from as a int
  let newData = data.coordsJson;           //the coordsJson object

  // newData is on the form 
  // {
  //   name: '',
  //   ueList: [ {x: 0, y: 0}, {x: 0, y: 0}, ... ],
  //   eNBList: [ {x: 0, y: 0}, {x: 0, y: 0}, ... ],
  //   buildingList: [ {x: 0, y: 0}, {x: 0, y: 0}, ... ],
  //   mobileUeList: [ {x: 0, y: 0}, {x: 0, y: 0}, ... ],
  // }

  let simName = newData.name;              //the name of the topology

  let dataString = JSON.stringify(newData);    //the coordsJson object as a string


  fs.writeFile(`Labs/Lab${lab.toString()}/coords-${simName}.txt`, dataString, (error) => {
    if (error)
      console.log(error);
    else {
      console.log("Coords file written succesfully\n")
    }
  })

  return res.status(200).send({
    success: 'true',
    message: 'upload successful'
  })
});





app.post("/uploadImageBase64", (req, res) => {

  let data = req.body.data.imageString;     //the image string file that is handled in the pythoninit
  let lab = parseInt(req.body.data.label);          //which lab the topology comes from as a int
  let simName = req.body.data.name


  fs.writeFile(`Images/Lab${lab.toString()}/base64Image-${simName}.txt`, data, (error) => {
    if (error)
      console.log(error);
    else {
      console.log("Images file written succesfully\n")
    }
  });
  return res.status(200).send({
    success: 'true',
    message: 'upload successful'
  })
});

app.listen(3002, () => {
  console.log("Server running successfully on 3002");
});