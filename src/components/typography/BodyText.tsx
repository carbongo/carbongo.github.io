import React, { ReactNode } from "react";

type BodyTextProps = {
  children: ReactNode;
};

export const BodyText: React.FC<BodyTextProps> = ({ children }) => {
  return <p>{children}</p>;
};
