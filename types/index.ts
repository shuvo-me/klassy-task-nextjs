import React from "react";

export interface AppContainerPropTypes {
  children: React.ReactNode;
  className?: string;
}

export interface CondiTionDataTypes {
  text: string;
}

export interface CouponTypes {
  id: number;
  name: string;
  code: string;
  image: string;
  conditions?: Array<CondiTionDataTypes>;
  description: string;
  discount_type: string;
  discount: number;
  free_shipping: string;
  start_date: string;
  end_date: string;
  min_spend: number;
  max_discount: number;
  usage_limit: string;
  usage_limit_customer: string;
  products?: unknown;
  categories?: unknown;
  created_at: string;
  key?: number;
}

export interface CouponPropTypes {
  coupon: CouponTypes;
}

export interface SkeletonLoadingPropTypes {
  itemsCount: number;
  sectionTitle: string;
}
