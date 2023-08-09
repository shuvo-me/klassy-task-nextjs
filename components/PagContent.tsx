"use cliet";
"use client";
import {
  AppContainer,
  CouponCard,
  Loading,
  SkeletonLoading,
} from "@/components";
import { CouponPropTypes, CouponTypes } from "@/types";
import { useCoupons } from "@/hooks";
import Image from "next/image";
import { useQuery } from "react-query";
import React from "react";

const PagContent = () => {
  const { isLoading, data } = useCoupons();
  if (isLoading)
    return <SkeletonLoading sectionTitle="Fetching Coupons:" itemsCount={4} />;

  const coupons = data?.data?.coupons;
  return (
    <section className="mt-[3rem]">
      <AppContainer>
        <h4 className=" mb-5">Coupon Lists:</h4>
        <div className=" grid grid-cols-1 min-[768px]:grid-cols-2 gap-[100px]">
          {coupons?.map((coupon: CouponTypes) => (
            <CouponCard coupon={coupon} key={coupon.id} />
          ))}
        </div>
      </AppContainer>
    </section>
  );
};

export default PagContent;
