export default function getCoords(
  name,
  ueListRefs,
  eNBListRefs,
  buildingListRefs,
  mobileUeListRefs,
  txPower,
  label,
  bandwidthValues
) {
  var json = {
    name: name,
    ueList: [],
    eNBList: [],
    buildingList: [],
    mobileUeList: [],
    txPower: txPower,
    eNBBandwidthList: [],
  };

  // Index of the forem i
  if (label === "3" || label === "0") {
    bandwidthValues.forEach((bandwidth) => {
      json.eNBBandwidthList.push(bandwidth);
      console.log(bandwidth);
  })};

  let refNode = eNBListRefs[0];

  if (refNode === undefined) {
    alert("You need at least one eNB");
    return false;
  }

  let xRef = refNode.getAbsolutePosition().x;
  let yRef = refNode.getAbsolutePosition().y;

  eNBListRefs.map((node) => {
    let x = (node.getAbsolutePosition().x - xRef) * 5.5;
    let y = (node.getAbsolutePosition().y - yRef) * 5.5;
    json.eNBList.push({ x: x, y: y });
  });

  ueListRefs.map((node) => {
    let x = (node.getAbsolutePosition().x - xRef) * 5.5;
    let y = (node.getAbsolutePosition().y - yRef) * 5.5;
    json.ueList.push({ x: x, y: y });
  });

  buildingListRefs.map((node) => {
    let x = (node.getAbsolutePosition().x - xRef) * 5.5;
    let y = (node.getAbsolutePosition().y - yRef) * 5.5;
    json.buildingList.push({ x: x, y: y });
  });

  
  mobileUeListRefs.map((node) => {
    let x = (node.getAbsolutePosition().x - xRef) * 5.5;
    let y = (node.getAbsolutePosition().y - yRef) * 5.5;
    json.mobileUeList.push({ x: x, y: y });
  });

  return json;
}

//   let coords = `SimName: ${name}`;
//   coords = coords + "\n" + "UE:";

//   if (refNode === undefined) {
//     alert("You need at least one eNB");
//     return false;
//   }
//   let xRefx = refNode.getAbsolutePosition().x;
//   let yRefx = refNode.getAbsolutePosition().y;

//   //Get UE coords
//   ueListRefs.map((node) => {
//     let x = node.getAbsolutePosition().x;
//     let y = node.getAbsolutePosition().y;

//     let xRel = x - xRef;
//     let yRel = y - yRef;

//     xRel = xRel * 5.5;
//     yRel = yRel * 5.5;

//     coords =
//       coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
//   });

//   coords = coords + "\n" + "eNB:";
//   //get the eNB coords
//   eNBListRefs.map((node) => {
//     let x = node.getAbsolutePosition().x;
//     let y = node.getAbsolutePosition().y;

//     let xRel = x - xRef;
//     let yRel = y - yRef;

//     xRel = xRel * 5.5;
//     yRel = yRel * 5.5;

//     coords =
//       coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
//   });

//   coords = coords + "\n" + "Buildings:";

//   buildingListRefs.map((node) => {
//     let x = node.getAbsolutePosition().x;
//     let y = node.getAbsolutePosition().y;

//     let xRel = x - xRef;
//     let yRel = y - yRef;

//     xRel = xRel * 5.5;
//     yRel = yRel * 5.5;

//     coords =
//       coords + `(${xRel.toFixed(2).toString()},${yRel.toFixed(2).toString()}),`;
//   });

//   console.log(coords);

//   return coords;
// }

//Get mobile coords and other eNBs
