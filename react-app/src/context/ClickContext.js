import React, { useState, createContext } from "react";

const ClickContext = createContext([]);

export const ClickProvider = ({ children }) => {
  const [clickUe, setClickUe] = useState(false);
  const [clickNB, setClickeNB] = useState(false);
  const [clickBuilding, setClickBuilding] = useState(false);
  const [clickMobileUe, setClickMobileUe] = useState(false);

  return (
    <ClickContext.Provider
      value={[
        clickUe,
        setClickUe,
        clickNB,
        setClickeNB,
        clickBuilding,
        setClickBuilding,
        clickMobileUe,
        setClickMobileUe,
      ]}
    >
      {children}
    </ClickContext.Provider>
  );
};

export default ClickContext;
