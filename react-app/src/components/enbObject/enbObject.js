import { useState } from "react";
import { Circle, Image, Group, Text } from "react-konva";
import TextObject from "../textObject/textObject";

export default function GroupObject({
  radius,
  radiusRefs,
  setRadiusRefs,
  seteNBListRefs,
  eNBListRefs,
  eNB,
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
        ref={(node) => {
          seteNBListRefs([...eNBListRefs, node]);
        }}
      />
      <TextObject xCoord={xCoord} yCoord={yCoord} />
    </Group>
  );
}


