import { ElementType } from "react";
import { CommonProps } from "../@types/common";

interface ContainerProps extends CommonProps {
  asElement?: ElementType;
}

import React from "react";

function Container({
  className,
  children,
  asElement: Component = "div",
  ...rest
}: ContainerProps) {
  return (
    <Component
      className={`2xl:container lg:px-[5rem] mx-auto px-4 ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Container;
