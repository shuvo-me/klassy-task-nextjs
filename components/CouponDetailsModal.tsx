"use client";
import useStore from "@/store";
import React from "react";
import Image from "next/image";
import { toast } from "react-toastify";
const CouponDetailsModal = () => {
  const { showModal, hideModal, couponInfo } = useStore();

  console.log({ couponInfo });

  const handleCopy = () => {
    navigator.clipboard.writeText(couponInfo?.code || "");
    toast.success("Code coped to clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div
      className={` bg-slate-500 bg-opacity-10 min-w-[100vh] top-0 left-0 right-0 bottom-0 min-h-screen absolute transition ${
        showModal ? "opacity-100 z-10" : "opacity-0 -z-10"
      }`}
      onClick={hideModal}
    >
      <div
        className=" shadow bg-white max-w-[500px] max-h-[740px] overflow-auto rounded-[15px] mx-auto mt-[4rem] custom-scroll-bar pr-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex  p-4 items-center">
          <div>
            <Image
              src={couponInfo?.image || ""}
              alt="details"
              className="object-contain"
              height={200}
              width={200}
            />
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="mb-0 font-bold text-[#d3066d]">
              {couponInfo?.max_discount}
            </h4>
            <div className="text-[13px] font-bold">Max Discount</div>
            <div className="text-[13px] font-bold">
              Min Discount {couponInfo?.min_spend}
            </div>
            <div className="text-[10px] opacity-[0.8] font-[300]">
              Valid {couponInfo?.created_at}
            </div>
          </div>
        </div>
        <div className="px-4 pb-4">
          <h4 className="text-uppercase mb-2 text-[18px] font-bold">
            {couponInfo?.name}
          </h4>
          <div className="text-[13px] font-[300] text-[rgb(8, 8, 8)] w-full leading-[25px]">
            {couponInfo.description}
          </div>
        </div>
        <div className="mt-auto mb-4">
          <div className="border-b-[2px] border-b-[#000000a5] border-dashed w-full" />
          <div className="mt-4 text-center">
            <span
              className="text-[#d3066d] border border-dashed border-[#d3066d] text-center text-[13px] font-[500] p-2 btn btn-sm btn-transparent w-[150px] inline-block"
              role="button"
            >
              Code: {couponInfo.code}
            </span>
          </div>
          <div className="text-center mt-3 pb-10">
            <button
              className="btn btn-sm btn-danger font-weight-bold w-[150px] flex items-center mx-auto text-white gap-[5px]"
              onClick={handleCopy}
            >
              <small>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                  />
                </svg>
              </small>{" "}
              Copy Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponDetailsModal;
