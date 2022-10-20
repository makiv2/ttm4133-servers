import React from "react"
import ButtonComponent from "./Button"
import axios from "axios";


const baseUrlFull = window.location.href
const tempArray = baseUrlFull.split(':')
const baseIpArray = tempArray[1].split('/')
const baseUrl = `http://${baseIpArray[2]}:3002`

const baseUrlOld = "http://localhost:3002";

const SaveButton = ({ name, label, ueListRefs, eNBListRefs, buildingListRefs, stageRef, axiosLink, axiosLinkImage }) => {

  const getCoords = () => {

    console.log(baseUrl);
    let coords = `SimName: ${name}`
    coords = coords + "\n" + "UE:";

    let refNode = eNBListRefs[0];

    if (refNode === undefined){
      alert("You need at least one eNB");
      return false;
    }
    let xRef = refNode.getAbsolutePosition().x;
    let yRef = refNode.getAbsolutePosition().y;

    
    //Get UE coords
    ueListRefs.map((node) => {
      let x = node.getAbsolutePosition().x;
      let y = node.getAbsolutePosition().y;
 
      let xRel = x - xRef;
      let yRel = y - yRef;

      xRel = xRel * 5.5;
      yRel = yRel * 5.5;

      coords =
        coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
    });

    coords = coords + "\n" + "eNB:";
    //get the eNB coords
    eNBListRefs.map((node) => {
      let x = node.getAbsolutePosition().x;
      let y = node.getAbsolutePosition().y;

      let xRel = x - xRef;
      let yRel = y - yRef;


      xRel = xRel * 5.5;
      yRel = yRel * 5.5;

      coords =
        coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
    });

    coords = coords + "\n" + "Buildings:";

    buildingListRefs.map((node) => {
      let x = node.getAbsolutePosition().x;
      let y = node.getAbsolutePosition().y;

      let xRel = x - xRef;
      let yRel = y - yRef;

      xRel = xRel * 5.5;
      yRel = yRel * 5.5;

      coords =
        coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
    });

    return coords;
  };

  const getImage = async () => {
    
    let image = await new Promise((callback) =>
      stageRef.current.toImage({ callback })
    );

    return image;
  };

  //TODO fix coords
  const saveCoords = async () => {

    if (name === "") {
      alert("Please fill in name :D");
      return
    }

    let coordstxt = getCoords();
    if (coordstxt === false) {
      return
    }

    let image = await getImage();

    let imageString = image.src;
    
    let finalCoords = { coordstxt, label, name }
    
    let finalImage = { imageString, label, name }

    console.log(`${baseUrl}+${axiosLink}`);

    await axios.post(`${baseUrl}${axiosLink}`, {
      data: finalCoords,
    });

    await axios.post(`${baseUrl}${axiosLinkImage}`, {
      data: finalImage,
    });
  };


  return (
    <ButtonComponent name={"Save"} onClick={saveCoords}/>
  )

}

export default SaveButton;