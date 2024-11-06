import React, { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h3>{children}</h3>;
};
