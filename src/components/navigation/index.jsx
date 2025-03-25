'use client'
import {useState} from "react";
import useGetUserRole from "@/hooks/useGetUserRole";
import useNavigationTree from "@/hooks/navigation/useNavigationTree";
import NavBar from "@/components/navigation/NavBar";
import SideBar from "@/components/navigation/SideBar";
import BreadCrumbs from "@/components/navigation/BreadCrumbs";

export default function Navigation() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const userRole = useGetUserRole();

  const {navigationTree} =
    useNavigationTree(userRole);

  const toggleSidebar = () => {
    console.log("toggleSidebar", sidebarOpened);
    console.log(navigationTree)
    setSidebarOpened((prev) => !prev);
  };

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar}/>

      {sidebarOpened && (
        <SideBar
          items={navigationTree}
          toggleSidebar={toggleSidebar}
        />
      )}
      <BreadCrumbs/>
    </>
  );
}
