import { createContext, ReactNode, useState } from "react";


export const ReposContextData = createContext({} as reposProviderProps);

interface ReposContextProviderProps {
  children: ReactNode;
}


type reposProviderProps = {
  dataProfiles: object;
  setDataProfiles: React.Dispatch<React.SetStateAction<object>>;
};

export const ReposContextProvider = (
  { children }: ReposContextProviderProps,
) => {
  const [dataProfiles, setDataProfiles] = useState({})


  return (
    <ReposContextData.Provider value={{ dataProfiles, setDataProfiles }}>
      {children}
    </ReposContextData.Provider>
  );
};