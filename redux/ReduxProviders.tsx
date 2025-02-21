import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { ProfileProvider } from "@/contextAPI/ProfileProvider";

export function ReduxProviders({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <Provider store={store}>
      <ProfileProvider>{children}</ProfileProvider>
    </Provider>
  );
}
