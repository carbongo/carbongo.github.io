import React, { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return <h1>{children}</h1>;
};
