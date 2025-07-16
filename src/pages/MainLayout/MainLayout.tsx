import { useState } from "react";
import Navbar from "../../layout/Navbar";
import Sidebar from "../../layout/Sidebar";
import { Box, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [buildOpen, setBuildOpen] = useState(false);

  const theme = useTheme();

  const handleBuildClick = () => {
    setBuildOpen(!buildOpen);
  };
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <Box flex="1">
        <Navbar onMenuClick={toggleSidebar} />
      </Box>
      <Sidebar
        open={sidebarOpen}
        buildOpen={buildOpen}
        onBuildClick={handleBuildClick}
      />
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          color: theme.palette.text.primary,
          width: sidebarOpen ? "calc(100% - 235px)" : "100%",
          marginLeft: sidebarOpen ? "235px" : 0,
          transition: "all 0.3s ease",
        }}
      >
        {/* <Suspense fallback={<Loader />}> */}
          <Outlet />
        {/* </Suspense> */}
      </Box>
    </>
  );
};

export default MainLayout;
