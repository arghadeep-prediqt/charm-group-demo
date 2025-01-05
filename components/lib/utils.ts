import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Logout
export const LogoutReq = async () => {
  try {
    const sendToken = await fetch("/api/auth", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (sendToken.status === 200) {
      window.location.replace("/auth");
    }
  } catch (error) {
    console.log(error);
  }
};
