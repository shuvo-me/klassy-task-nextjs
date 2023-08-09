import { AppContainerPropTypes } from "@/types";
import React, { FC } from "react";

const AppContainer: FC<AppContainerPropTypes> = ({ children, className }) => {
  return (
    <div
      className={`  min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] px-[15px] mx-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
