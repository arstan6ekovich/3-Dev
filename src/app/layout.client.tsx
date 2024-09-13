"use client"
import Layout from "@/components/layout/Layout";
import ReduxProvider from "@/provider/ReduxProvider";
import React, { FC, ReactNode } from "react";

interface LayoutClientType {
  children: ReactNode;
}

const LayoutClient: FC<LayoutClientType> = ({ children }) => {
  return (
    <ReduxProvider>
      <Layout>{children}</Layout>
    </ReduxProvider>
  );
};

export default LayoutClient;
