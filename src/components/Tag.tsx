import React, { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export const Tag: React.FC<TagProps> = ({ children }) => {
  return <div className="tag">{children}</div>;
};
