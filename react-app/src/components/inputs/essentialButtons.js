import { useContext } from "react";
import ClickContext from "../../context/ClickContext";
import ButtonComponent from "../Button";
import Form from "react-bootstrap/Form";
import AddContext from "../../context/AddContext";

export default function EssentialButtons() {
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

  const clearItems = () => {
    window.location.reload();
  };

  return (
    <div className="essentialButtons">
      <ButtonComponent name="Add UE" onClick={() => setClickUe(true)} />
      <ButtonComponent name="Add eNB" onClick={() => setClickeNB(true)} />
      <ButtonComponent name="Clear" onClick={clearItems} />

      {/*<ButtonComponent name="Default Topology" onClick={testFunction} />*/}
    </div>
  );
}
