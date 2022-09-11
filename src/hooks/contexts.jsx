import React, { useState } from "react";

export const Context = React.createContext({});

export const ContextProvider = (props) => {
  const [activities, setActivities] = useState(localStorage.getItem("activities") ? JSON.parse(`[${localStorage.getItem("activities")}]`): '');
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [searchQueried, setSearchQueried] = useState(false);
  const [displayUserProfile, setDisplayUserProfile] = useState(false)
  const [displayOverlay, setDisplayOverlay] = useState('z-1')
  const [userImage] = useState(localStorage.getItem('user_image') ? localStorage.getItem('user_image') : '')
  const [displayInsertImageModal, setDisplayInsertImageModal] = useState(false)

  return (
    <Context.Provider
      value={{
        activities,
        setActivities,
        displayDropdown,
        setDisplayDropdown,
        searchQueried,
        setSearchQueried,
        displayUserProfile,
        setDisplayUserProfile,
        displayOverlay,
        setDisplayOverlay,
        userImage,
        displayInsertImageModal, 
        setDisplayInsertImageModal
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export const useContextHook = () => React.useContext(Context);
