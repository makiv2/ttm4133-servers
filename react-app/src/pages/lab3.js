import React from "react";
import { useState, useRef, useContext } from "react";
import { Stage, Layer } from "react-konva";
import ButtonComponent from "../components/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import ClickContext from "../context/ClickContext";
import { useAddItem } from "../hooks/useAddItem";
import AddContext from "../context/AddContext";
import SaveButton from "../components/SaveButton";
import UeObject from "../components/ueObject/ueObject";

import "../App.css";
import StageGroup from "../components/stage/stage";
import EssentialButtons from "../components/inputs/essentialButtons";

export default function Defaultlab() {
  const [name, setName] = useState("");
  const [txPower, setTxPower] = useState(0);
  const {
    ueList,
    setueList,
    eNBList,
    seteNBList,
    buildingList,
    setbuildingList,
    ueListRefs,
    setueListRefs,
    eNBListRefs,
    seteNBListRefs,
    buildingListRefs,
    setbuildingListRefs,
    radiusRefs,
    setRadiusRefs,
    radius,
    setRadius,
    mobileUeList,
    mobileUeListRefs,
  } = useContext(AddContext);
  const [
    clickUe,
    setClickUe,
    clickNB,
    setClickeNB,
    clickBuilding,
    setClickBuilding,
    clickMobileUe,
    setClickMobileUe,
  ] = useContext(ClickContext);
  const stageRef = useRef(null);
  useAddItem(); // Run our custom hook to add items.

  //const [mobileUE] = useImage('https://konvajs.org/assets/lion.png');

  const clearItems = () => {
    window.location.reload();
  };

  const updateRadius = (e) => {
    setRadius(e.target.value);

    radiusRefs.forEach((node) => {
      node.setRadius(e.target.value * 5);
    });

    setTxPower(e.target.value); //todo\
  };

  const testFunction = () => {
    console.log(name);
  };
  //scale on layer
  return (
    <div>
      <div className="border border-secondary rounded">
        <StageGroup
          ueList={ueList}
          eNBList={eNBList}
          buildingList={buildingList}
          mobileUeList={mobileUeList}
          stageRef={stageRef}
        />
      </div>

      <div className="container-fluid">
        <div className="row  d-flex">
          <div className="col-5 d-flex justify-content-end">
            <EssentialButtons /> {/* Buttons for adding items, Ue, eNB clear */}
          </div>

          <div className="col-5 justify-content-start">
            <ButtonComponent
              name="Add mobile UE path"
              onClick={() => setClickMobileUe(true)}
            />
          </div>
          <div className="col-2" />
        </div>

        <div className="row d-flex">
          <div className="col-5 d-flex justify-content-end">
            <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label>TxPower: {radius} dBm</Form.Label>
                <Form.Control
                  type="range"
                  min="15"
                  max="45"
                  step="1"
                  onChange={updateRadius}
                />
              </Form.Group>
              <Form.Text className="text-muted">
                Values between 15 to 45 dBm are accepted.
              </Form.Text>
            </Form>
          </div>
          <div className="col-2">
            <Form>
              <Form.Label>Simulation Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter simulation name"
                value={name}
                className="form-control"
                onChange={(event) => setName(event.target.value)}
              />
              <Form.Text className="text-muted">
                Please enter a name for your simulation.
              </Form.Text>
            </Form>
          </div>
          <div className="col-5" />
        </div>

        <div className="row d-flex">
          <div className="col-5"> 
          
            {/* eNB bandwidth ?*/}

          </div>

          <div className="col-2">
            <SaveButton
              axiosLink="/uploadCoords"
              axiosLinkImage="/uploadImageBase64"
              label="0"
              name={name}
              stageRef={stageRef}
              eNBListRefs={eNBListRefs}
              buildingListRefs={buildingListRefs}
              ueListRefs={ueListRefs}
              mobileUeListRefs={mobileUeListRefs}
              txPower={txPower}
            />
          </div>
          <div className="col-5" />
        </div>
      </div>

      {/* <Form.Label>TxPower: </Form.Label>
      <input value={radius} className="btn-custom" onChange={updateRadius} />
      <Form.Text className="text-muted">
        {" "}
        Values from 38 to 43 dBm are accepted.{" "}
      </Form.Text>
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
              <Form.Text className="text-muted">
                {" "}
                Values from 38 to 43 dBm are accepted.{" "}
              </Form.Text>

              <SaveButton
                axiosLink="/uploadCoords"
                axiosLinkImage="/uploadImageBase64"
                label="0"
                name={name}
                stageRef={stageRef}
                eNBListRefs={eNBListRefs}
                buildingListRefs={buildingListRefs}
                ueListRefs={ueListRefs}
                mobileUeListRefs={mobileUeListRefs}
              />
            </div>
          </div>
          <div className="col-md-9 spaceTop">
            {" "}
            Make sure to rememberd the name of the simulation as you need it
            later when you want to run it.
          </div>
        </div>
      </div> */}
    </div>
  );
}

//export default App;
