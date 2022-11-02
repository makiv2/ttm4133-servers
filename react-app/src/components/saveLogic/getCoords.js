export default function getCoords (name, ueListRefs, eNBListRefs, buildingListRefs) {

    
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
}




//Get mobile coords and other eNBs

