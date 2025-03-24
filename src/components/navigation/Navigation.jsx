'use client'
import {useState} from "react";
import useGetUserRole from "@/hooks/useGetUserRole";
import useNavigationTree from "@/hooks/navigation/useNavigationTree";
import NavBar from "@/components/navigation/NavBar/NavBar";
import SideBarNav from "@/components/navigation/SideBar/SideBarNav";
import BreadCrumbs from "@/components/navigation/BreadCrumbs/BreadCrumbs";

export default function Navigation() {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const [sidebarAccessed, setSidebarAccessed] = useState(false);
  const userRole = useGetUserRole();

  const {navigationTree, loadingNavigation, errorLoadingNavigation} =
    useNavigationTree(userRole);

  const toggleSidebar = () => {
    setSidebarAccessed(true)
    setSidebarOpened((prev) => !prev);
  };

  return (
    <>
      <NavBar toggleSidebar={toggleSidebar}/>

      {loadingNavigation && <div>Loading navigation...</div>}
      {errorLoadingNavigation && <div>Error loading navigation</div>}
      { sidebarAccessed && navigationTree?.length > 0 && (
        <SideBarNav
          items={navigationTree}
          open={sidebarOpened}
          toggleSidebar={toggleSidebar}
        />
      )}
      <BreadCrumbs/>
    </>
  );
}
