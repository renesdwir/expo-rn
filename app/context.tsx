import React, { useState } from "react";
type UserType = {
  id: string;
  salutation: string;
  name: string;
};
type TamuContextType = {
  user: UserType[];
  setUser: React.Dispatch<
    React.SetStateAction<{ id: string; salutation: string; name: string }[]>
  >;
};
const defaultUser = [
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd92aa97f63",
    salutation: "Mr.",
    name: "Jhon Doe",
  },
];
const TamuContext = React.createContext<TamuContextType>({
  user: defaultUser,
  setUser: () => {},
});

const TamuContextProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType[]>(defaultUser);
  return (
    <TamuContext.Provider value={{ user, setUser }}>{children}</TamuContext.Provider>
  );
};

export { TamuContext, TamuContextProvider };
