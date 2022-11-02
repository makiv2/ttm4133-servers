import getCoords from "./getCoords";
import getImage from "./getImage";

export default async function formatData(name, ueListRefs, eNBListRefs, buildingListRefs, stageRef, label) {
  if (name === "") {
    alert("Please fill in name :D");
    return
  }

  let coordstxt = getCoords(name, ueListRefs, eNBListRefs, buildingListRefs, stageRef);
  if (coordstxt === false) {
    return
  }

  let image = await getImage();


  let imageString = image.src;
  
  let finalCoords = { coordstxt, label, name }
  
  let finalImage = { imageString, label, name }
  
  return {finalCoords, finalImage}
    
}
