import React, { useContext, useEffect, useState } from "react";
import AddContext from "../context/AddContext";
import ClickContext from "../context/ClickContext";
import useImage from "use-image";
import {
    Circle,
    Image,
    Group,
    Text,
  } from "react-konva";
import uePicture from "../assets/sz_mobile-phone.png";
import buildingPicture from "../assets/sz_house.png";
import enbPicture from "../assets/sz_enb.png";



const useAddItem = () => {
  const [ueList, setueList, 
    eNBList, seteNBList, 
    buildingList, setbuildingList, 
    ueListRefs, setueListRefs, 
    eNBListRefs, seteNBListRefs, 
    buildingListRefs, setbuildingListRefs,
    radiusRefs, setRadiusRefs,
    radius, setRadius] = useContext(AddContext)
    const [clickUe, setClickUe, clickeNB, setClickeNB, clickBuilding, setClickBuilding] = useContext(ClickContext);

  const [ue] = useImage(uePicture);
  const [eNB] = useImage(enbPicture);
  const [building] = useImage(buildingPicture);


    useEffect(() => {
      if(clickUe) {
        setueList([
          ...ueList,
          <UeObject
          ue={ue}
          ueListRefs={ueListRefs}
          setueListRefs={setueListRefs}/>
        ]);
        setClickUe(false);
      }


      if(clickeNB) {
        seteNBList([
          ...eNBList,
          <GroupObject
          radius={radius}
          radiusRefs={radiusRefs}
          setRadiusRefs={setRadiusRefs}
          seteNBListRefs={seteNBListRefs}
          eNBListRefs={eNBListRefs}
          eNB={eNB}
          /> ,
        ]);
        setClickeNB(false);
      }

      if(clickBuilding) {
        setbuildingList([
          ...buildingList,
          <HouseObject
          building={building}
          setbuildingListRefs={setbuildingListRefs}
          buildingListRefs={buildingListRefs}/>,
        ]);

        setClickBuilding(false);
      }
    }, [clickUe, clickeNB, clickBuilding])
}

function GroupObject ({radius, radiusRefs, setRadiusRefs, seteNBListRefs, eNBListRefs, eNB}) {

  const [xCoord, setXCoord] = useState(50);
  const [yCoord, setYCoord] = useState(50);

  return (
    <Group draggable
          onDragEnd={(e) => {

                setXCoord(e.target._lastPos.x)
                setYCoord(e.target._lastPos.y)
          }}>
            <Circle
              listening={false}
              radius={radius}
              stroke="black"
              strokeWidth={2}
              x={72}
              y={78}
              ref={(node) => {
                setRadiusRefs([...radiusRefs, node]);
              }}
            />
            <Image
              image={eNB}
              x={50}
              y={50}
              ref= {(node) => {
                seteNBListRefs([...eNBListRefs, node]);
              }}
            />
      <TextObject
      xCoord={xCoord}
      yCoord={yCoord}
        />
          </Group>
  )
}


function UeObject ({ue, ueListRefs, setueListRefs}) {


  const [xCoord, setXCoord] = useState(50);
  const [yCoord, setYCoord] = useState(50);

  return (      //MAKE GROUP ADD TEXT
  <Group draggable
  onDragEnd={(e) => {

    setXCoord(e.target._lastPos.x)
    setYCoord(e.target._lastPos.y)
  }} > 

  <Image
    image={ue}
    x={50}
    y={50}

    ref={(node) => {
      setueListRefs([...ueListRefs, node]);
    }}
  />
  <TextObject
  xCoord={xCoord}
  yCoord={yCoord}
  />
  </Group>
  )

}

function HouseObject ({building, setbuildingListRefs, buildingListRefs}) {

  const [xCoord, setXCoord] = useState(50);
  const [yCoord, setYCoord] = useState(50);

  return (
  <Group
  draggable
  onDragEnd={(e) => {

    setXCoord(e.target._lastPos.x)
    setYCoord(e.target._lastPos.y)
  }}>

  <Image
    image={building}
    x={50}
    y={50}
    ref={(node) => {
      setbuildingListRefs([...buildingListRefs, node]);
    }}
  />
  
  <TextObject
  xCoord={xCoord}
  yCoord={yCoord}
  />

  </Group>)

}

function TextObject ({xCoord,yCoord}){



  return(
    <Text
    align="center"
    x={35}
    y={105} 
    text={`(${Math.round(xCoord)},${Math.round(yCoord)})`}
    fontSize={20}
    fontStyle="bold" />
  )
} 

export { useAddItem }