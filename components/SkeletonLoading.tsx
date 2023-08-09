import React, { FC } from "react";
import { AppContainer } from ".";
import { SkeletonLoadingPropTypes } from "@/types";

const SkeletonLoading: FC<SkeletonLoadingPropTypes> = ({
  itemsCount,
  sectionTitle,
}) => {
  return (
    <section className="mt-[3rem]">
      <AppContainer>
        <h4 className=" mb-5">{sectionTitle}</h4>
        <div className=" grid grid-cols-1 min-[768px]:grid-cols-2 gap-[50px]">
          {[...new Array(itemsCount)]?.map((coupon) => (
            <div
              className="min-h-[200px] shadow rounded-md p-4  w-full "
              key={Math.random()}
            >
              <div className="animate-pulse flex space-x-4">
                <div className="flex-1 space-y-6 py-1">
                  <div className="h-[3rem] bg-slate-200 rounded"></div>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-[2rem] bg-slate-200 rounded col-span-2"></div>
                      <div className="h-[2rem] bg-slate-200 rounded col-span-1"></div>
                    </div>
                    <div className="h-[2rem] bg-slate-200 rounded mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default SkeletonLoading;
