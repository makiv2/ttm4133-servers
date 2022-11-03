import React, { useState, createContext } from "react";

const AddContext = createContext([]);

export const AddProvider = ({ children }) => {
  const [ueList, setueList] = useState([]);
  const [mobileUeList, setmobileUeList] = useState([]);
  const [eNBList, seteNBList] = useState([]);
  const [buildingList, setbuildingList] = useState([]);
  const [ueListRefs, setueListRefs] = useState([]);
  const [mobileUeListRefs, setmobileUeListRefs] = useState([]);
  const [eNBListRefs, seteNBListRefs] = useState([]);
  const [buildingListRefs, setbuildingListRefs] = useState([]);
  const [radiusRefs, setRadiusRefs] = useState([]);
  const [radius, setRadius] = useState(0);
  const [eNBfieldList, seteNBfieldList] = useState([]);

  return (
    <AddContext.Provider
      value={{
        ueList,
        mobileUeListRefs,
        setmobileUeListRefs,
        mobileUeList,
        setmobileUeList,
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
        eNBfieldList,
        seteNBfieldList,
      }}
    >
      {children}
    </AddContext.Provider>
  );
};

export default AddContext;
