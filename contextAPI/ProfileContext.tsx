import { createContext, useContext } from "react";

interface ProfileContextProps {
  cookieToken: string;
}

const ProfileContext = createContext<ProfileContextProps>({
  cookieToken: "",
});

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export default ProfileContext;
