import React, { ReactNode } from "react";

type MetaTextProps = {
  children: ReactNode;
};

export const MetaText: React.FC<MetaTextProps> = ({ children }) => {
  return <span className="meta">{children}</span>;
};
