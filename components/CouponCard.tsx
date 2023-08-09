"use client";
import useStore from "@/store";
import { CouponPropTypes } from "@/types";
import React, { FC } from "react";

const CouponCard: FC<CouponPropTypes> = ({ coupon }) => {
  const { showModal, openModal, couponInfo, setCouponInfo, hideModal } =
    useStore();
  console.log({ showModal });
  return (
    <div
      className="w-full coupon-box bg-coupon-gradient"
      onClick={() => {
        setCouponInfo(coupon);
        openModal();
      }}
    >
      <div className="flex items-center cursor-pointer h-full ">
        <div className="w-[70%] text-white border-r-[3px] border-r-white border-dashed h-full py-[25px] pl-[60px] pr-[3rem]">
          <h4 className=" uppercase text-[15px] mb-[8px] truncate ">
            {coupon.name}
          </h4>
          <p className="text-[12px] mb-[1rem] line-clamp-2  font-medium">
            {coupon.description}
          </p>
          <span className="text-[13px] font-bold block">
            Code: {coupon.code}
          </span>
          <small className="bg-[#212121] rounded-sm text-white text-[10px] pb-[0.25rem] capitalize inline-block py-[0.25em] px-[0.4em] text-center line-h leading-[1]">
            See Details
          </small>
        </div>
        <div className="coupon-code h-full text-center pl-[10px] text-white pt-[25px]">
          <p className="text-[13px]">Spend: {coupon.min_spend}</p>
          <h4 className="text-white mb-0 mt-[0.5rem]">{coupon.max_discount}</h4>
          <span className="text-[13px]">Max Discount</span>
          <div className="text-[10px] opacity-[0.8] font-[300] mt-[0.5rem]">
            {coupon.created_at}
          </div>
        </div>
      </div>

      <div className="coupon-circle-left"></div>
      <div className="coupon-circle-right"></div>
    </div>
  );
};

export default CouponCard;
