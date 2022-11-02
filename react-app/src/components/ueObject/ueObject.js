import { useState } from "react";
import { Circle, Image, Group, Text } from "react-konva";
import TextObject from "../textObject/textObject";

export default function UeObject({ ue, ueListRefs, setueListRefs }) {
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
        image={ue}
        x={50}
        y={50}
        ref={(node) => {
          setueListRefs([...ueListRefs, node]);
        }}
      />
      <TextObject xCoord={xCoord} yCoord={yCoord} />
    </Group>
  );
}
