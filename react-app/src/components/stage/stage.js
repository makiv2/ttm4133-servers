
import { Stage, Layer } from "react-konva";

var width = window.innerWidth * 0.99;
var heigth = window.innerHeight * 0.7;
export default function StageGroup({
  ueList,
  eNBList,
  buildingList,
  stageRef,
  mobileUeList,
}) {
  //const { ueList, eNBList, buildingList, stageRef } = useContext(AddContext);

  return (
    <Stage ref={stageRef} width={width} height={heigth}>
      <Layer scale={50}>
        {buildingList.map((e) => {
          return e;
        })}

        {eNBList.map((e) => {
          return e;
        })}

        {mobileUeList.map((e) => {
          return e;
        })} 

        {ueList.map((e, i) => {
          //const imageIndex = i % 3;
          //const image = imageArray[imageIndex];
          return e;
          // FIX
          // <UeObject
          //   key={`ueobject-${i}`}
          //   ue={e.ue}
          //   ueListRefs={e.ueListRefs}
          //   setueListRefs={e.setueListRefs}
          //   />
        })}

        {/* <Circle radius={radius} stroke="black" strokeWidth={5} x={50} y={50} draggable /> */}
      </Layer>
      <Layer name="top-layer" />
    </Stage>
  );
}
