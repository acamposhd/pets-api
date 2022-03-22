import React from "react";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import "./App.css";
import OwnerPage from "./pages/Owner";
import Nav from "./components/Navbar";
import MainLayout from "./layouts/Main";
import { Route, Routes, Outlet } from "react-router-dom";

Amplify.configure(config);

function App() {
  const LayoutComponent = withAuthenticator(Layout);
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route index element={<Home />} />
          <Route path="owners" element={<OwnerPage />} />
          <Route path="pets" element={<Pets />} />
          <Route path="vaccines" element={<Vaccines />} />
        </Route>
      </Routes>
    </>
  );
}

function Home() {
  return <p>Home</p>;
}

function Pets() {
  return <p>pets</p>;
}
function Vaccines() {
  return <p>vaccines</p>;
}

function Layout({ signOut, user }) {
  return (
    <>
      <Nav signOut={signOut} user={user} />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default withAuthenticator(App);
