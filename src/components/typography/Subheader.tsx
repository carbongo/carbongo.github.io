import React, { ReactNode } from "react";

type SubheaderProps = {
  children: ReactNode;
};

export const Subheader: React.FC<SubheaderProps> = ({ children }) => {
  return <h2>{children}</h2>;
};
