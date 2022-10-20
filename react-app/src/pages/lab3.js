import React from "react";
import { useState, useRef, useContext } from "react";
import {
  Stage,
  Layer,
} from "react-konva";
import ButtonComponent from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import ClickContext from "../context/ClickContext";
import { useAddItem } from "../hooks/useAddItem";
import AddContext from "../context/AddContext";
import SaveButton from "../components/SaveButton"


import "../App.css";

var width = window.innerWidth *0.70;
var heigth = window.innerHeight *0.70;

export default function Defaultlab() {
  const [name, setName] = useState("");
  const [txPower, setTxPower] = useState(0);
  const [ueList, setueList, 
    eNBList, seteNBList, 
    buildingList, setbuildingList, 
    ueListRefs, setueListRefs, 
    eNBListRefs, seteNBListRefs, 
    buildingListRefs, setbuildingListRefs,
    radiusRefs, setRadiusRefs,
    radius, setRadius] = useContext(AddContext)
    const [clickUe, setClickUe, clickNB, setClickeNB, clickBuilding, setClickBuilding] = useContext(ClickContext);
    const stageRef = useRef(null);
    useAddItem(); // Run our custom hook to add items.


  //const [mobileUE] = useImage('https://konvajs.org/assets/lion.png');

  const clearItems = () => {
    window.location.reload();
  };

  const updateRadius = (e) => {
    setRadius(e.target.value);

    radiusRefs.map((node) => {
      node.setRadius(e.target.value * 10);
    });

    setTxPower(e.target.value); //todo
  };

  const testFunction = () => {
    console.log(name);
  };

  return (
    <div>
      <Stage ref={stageRef} width={width} height={heigth}>
        <Layer>
          {buildingList.map((e) => {
            return e;
          })}

          {eNBList.map((e) => {
            return e;
          })}

          {ueList.map((e) => {
            return e;
          })}

          {/* <Circle radius={radius} stroke="black" strokeWidth={5} x={50} y={50} draggable /> */}
        </Layer>
        <Layer name="top-layer" />
      </Stage>


      <ButtonComponent name="Add UE" onClick={() => setClickUe(true)}/>
      <ButtonComponent name="Add eNB" onClick={() => setClickeNB(true)}/>
      <ButtonComponent name="Add building" onClick={() => setClickBuilding(true)}/>
      {/* <ButtonComponent name="Add Mobile UE" onClick={useAddBuildingItem}/> */}
      <ButtonComponent name="Clear" onClick={clearItems}/>
      <ButtonComponent name="Default Topology" onClick={testFunction}/>




      <Form.Label>TxPower: </Form.Label>

      <input value={radius} className="btn-custom" onChange={updateRadius} />
      <Form.Text className="text-muted"> Values from 38 to 43 dBm are accepted. </Form.Text>


      <div className="container-fluid page-layout spaceTop">
        <div className="row">
          <div className="col-md-0"></div>

          <div className="col-md-2">
            <div className="container-fluid">
                <Form.Label>Simulation Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name"
                  value={name}
                  className="btn-custom"
                  onChange={(event) => setName(event.target.value)}
                />
                  <Form.Text className="text-muted"> Values from 38 to 43 dBm are accepted. </Form.Text>

                  <SaveButton axiosLink="/uploadCoords" axiosLinkImage="/uploadImageBase64" label="3" name={name} stageRef={stageRef} eNBListRefs={eNBListRefs} buildingListRefs={buildingListRefs} ueListRefs={ueListRefs}/>
            </div>
          </div>
          <div className="col-md-9 spaceTop"> Make sure to rememberd the name of the simulation as you need it later when you want to run it.</div>
        </div>
      </div>
    </div>
  );
}

//export default App;
