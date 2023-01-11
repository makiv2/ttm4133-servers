import { Text } from "react-konva";

export default function TextObject({ xCoord, yCoord }) {
  return (
    <Text
      align="center"
      x={35}
      y={105}
      text={`(${Math.round(xCoord)},${Math.round(yCoord)})`}
      fontSize={20}
      fontStyle="bold"
    />
  );
}
