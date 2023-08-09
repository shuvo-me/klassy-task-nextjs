"use client";
import { PagContent } from "@/components";
import CouponDetailsModal from "@/components/CouponDetailsModal";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <PagContent />
        <ToastContainer />
      </main>
      <CouponDetailsModal />
    </QueryClientProvider>
  );
}
