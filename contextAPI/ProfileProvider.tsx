import React, { useEffect, useState } from "react";
import ProfileContext from "./ProfileContext";
import { getCookie, hasCookie } from "cookies-next";
import { useAppDispatch } from "@/redux/hooks";
import { useLazyVerifyUserTokenQuery } from "@/redux/services/authApi";
import { addUserDetails } from "@/redux/slice/userSlice";

interface ProfileProviderProps {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const exists_token = hasCookie("authUser");
  const [cookieToken, setCookieToken] = useState<string>("");
  const [verifyUserToken] = useLazyVerifyUserTokenQuery();

  useEffect(() => {
    if (exists_token) {
      const authUser = String(getCookie("authUser"));
      const authObj = JSON.parse(authUser);

      verifyUserToken({ token: authObj?.token })
        .then((response) => {
          // console.log(response.data);
          if (response.data) {
            setCookieToken(authObj?.token || "");
            dispatch(
              addUserDetails({
                name: response?.data?.name || "",
                email: response?.data?.email || "",
                role: String(response?.data?.role).toLocaleLowerCase(),
                image: `https://ui-avatars.com/api/?name=${response?.data?.name
                  ?.split(" ")
                  .join("+")}&&background=fde047`,
                is_auth: true,
              })
            );
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // console.log(authObj);
    }
  }, [dispatch, exists_token, verifyUserToken]);

  return (
    <ProfileContext.Provider value={{ cookieToken }}>
      {children}
    </ProfileContext.Provider>
  );
};
