import { useState } from "react";
import { Circle, Image, Group, Text } from "react-konva";
import TextObject from "../textObject/textObject";

export default function MobileUeObject({
  image,
  //mobileUe,
  //mobileUe1,
  // mobileUe2,
  mobileUeListRefs,
  setmobileUeListRefs,
}) {
  const [xCoord, setXCoord] = useState(50);
  const [yCoord, setYCoord] = useState(50);



  return (
    <Group
      draggable
      onDragEnd={(e) => {
        setXCoord(e.target._lastPos.x);
        setYCoord(e.target._lastPos.y);
      }}
    >
      <Image
        image={image}
        x={50}
        y={50}
        ref={(node) => {
          setmobileUeListRefs([...mobileUeListRefs, node]);
        }}
      />
      <TextObject xCoord={xCoord} yCoord={yCoord} />
    </Group>
  );
}
