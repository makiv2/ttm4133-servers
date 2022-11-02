import { useState } from "react";
import { Circle, Image, Group, Text } from "react-konva";
import TextObject from "../textObject/textObject";

export default function HouseObject({
  building,
  setbuildingListRefs,
  buildingListRefs,
}) {
  const [xCoord, setXCoord] = useState(50);
  const [yCoord, setYCoord] = useState(50);

  console.log(buildingListRefs);

  return (
    <Group
      draggable
      onDragEnd={(e) => {
        setXCoord(e.target._lastPos.x);
        setYCoord(e.target._lastPos.y);
      }}
    >
      <Image
        image={building}
        x={50}
        y={50}
        ref={(node) => {
          setbuildingListRefs([...buildingListRefs, node]);
        }}
      />

      <TextObject xCoord={xCoord} yCoord={yCoord} />
    </Group>
  );
}
