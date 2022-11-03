import getCoords from "./getCoords";
import getImage from "./getImage";

export default async function formatData(name, ueListRefs, eNBListRefs, buildingListRefs, mobileUeListRefs, stageRef, label) {
  if (name === "") {
    alert("Please fill in name :D");
    return
  }


  let coordsJson = getCoords(name, ueListRefs, eNBListRefs, buildingListRefs, mobileUeListRefs);


  if (coordsJson === false) {
    return
  }

  let image = await getImage(stageRef);

  let imageString = image.src;
  
  let finalCoords = { coordsJson , label, name } 
  
  let finalImage = { imageString, label, name }
  
  return {finalCoords, finalImage};
    
}
