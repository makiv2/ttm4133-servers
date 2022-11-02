

export default async function getImage(stageRef) {
  let image = await new Promise((callback) =>
    stageRef.current.toImage({ callback })
  );

  return image;
}
