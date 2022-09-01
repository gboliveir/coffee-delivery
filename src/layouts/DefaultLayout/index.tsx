import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/Header";

import { PageContainer } from "./styles";

export function DefaultLayout() {
  return (
    <PageContainer>
      <Header />
      <Outlet />
    </PageContainer>
  );
}