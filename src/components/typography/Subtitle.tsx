import React, { ReactNode } from "react";

type SubtitleProps = {
  children: ReactNode;
};

export const Subtitle: React.FC<SubtitleProps> = ({ children }) => {
  return <h4>{children}</h4>;
};
