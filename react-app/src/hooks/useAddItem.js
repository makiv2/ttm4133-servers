import React, { useContext, useEffect, useState } from "react";
import AddContext from "../context/AddContext";
import ClickContext from "../context/ClickContext";
import useImage from "use-image";
import uePicture from "../assets/sz_mobile-phone.png";
import buildingPicture from "../assets/sz_house.png";
import enbPicture from "../assets/sz_enb.png";
import GroupObject from "../components/enbObject/enbObject";
import HouseObject from "../components/houseObject/houseObject";
import UeObject from "../components/ueObject/ueObject";
import MobileUeObject from "../components/mobileUeObject/mobileUeObject";
import mobileUe1 from "../assets/mobileUE/mobileUE1.png";
import mobileUe2 from "../assets/mobileUE/mobileUE2.png";
import mobileUe3 from "../assets/mobileUE/mobileUE3.png";
import mobileUe4 from "../assets/mobileUE/mobileUE4.png";
import mobileUe5 from "../assets/mobileUE/mobileUE5.png";


const useAddItem = () => {
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
    setmobileUeList,
    mobileUeListRefs,
    setmobileUeListRefs,
  } = useContext(AddContext);
  const [
    clickUe,
    setClickUe,
    clickeNB,
    setClickeNB,
    clickBuilding,
    setClickBuilding,
    clickMobileUe,
    setClickMobileUe,
  ] = useContext(ClickContext);

  const [ue] = useImage(uePicture);
  const [eNB] = useImage(enbPicture);
  const [building] = useImage(buildingPicture);
  const [pictureIndex, setPictureIndex] = useState(0);
  
  const [mUe1] = useImage(mobileUe1);
  const [mUe2] = useImage(mobileUe2);
  const [mUe3] = useImage(mobileUe3);
  const [mUe4] = useImage(mobileUe4);
  const [mUe5] = useImage(mobileUe5);



  useEffect(() => {
    if (clickUe) {
      // const ueObject = {
      //   ue,
      //   ueListRefs,
      //   setueListRefs
      // };
      setueList([
        ...ueList,
        //ueObject
        <UeObject
          ue={ue}
          ueListRefs={ueListRefs}
          setueListRefs={setueListRefs}
        />,
      ]);
      setClickUe(false);
    }

    if (clickeNB) {
      seteNBList([
        ...eNBList,
        <GroupObject
          radius={radius}
          radiusRefs={radiusRefs}
          setRadiusRefs={setRadiusRefs}
          seteNBListRefs={seteNBListRefs}
          eNBListRefs={eNBListRefs}
          eNB={eNB}
        />,
      ]);
      setClickeNB(false);
    }

    if (clickBuilding) {
      setbuildingList([
        ...buildingList,
        <HouseObject
          building={building}
          setbuildingListRefs={setbuildingListRefs}
          buildingListRefs={buildingListRefs}
        />,
      ]);

      setClickBuilding(false);
    }

    if (clickMobileUe) {
      if (pictureIndex === 5)
        return
      const pictures = [mUe1, mUe2, mUe3, mUe4, mUe5];

      setmobileUeList([
        ...mobileUeList,
        <MobileUeObject
          image={pictures[pictureIndex]}
          mobileUeListRefs={mobileUeListRefs}
          setmobileUeListRefs={setmobileUeListRefs}
        />,
      ]);
      setPictureIndex(pictureIndex + 1);


      setClickMobileUe(false);
    }




  }, [clickUe, clickeNB, clickBuilding, clickMobileUe]);
};



export { useAddItem };
