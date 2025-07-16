import React, { useContext } from "react";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import {
  IconButton,
  Tooltip,
  Menu,
  MenuItem,
  Box,
  Switch,
  styled,
  Typography,
} from "@mui/material";
import { ThemeContext } from "../themes/ThemeContext";

const CustomNavbar = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0,
  zIndex: theme.zIndex.appBar,
}));

const NavbarBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));

const CustomSwitch = styled(Switch)(() => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "black",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "white",
  },
}));

const Navbar = ({ onMenuClick }: { onMenuClick: () => void }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <CustomNavbar>
        <NavbarBox>
          <IconButton onClick={onMenuClick}>
            <MenuTwoToneIcon style={{ fontSize: 25, color: "#ffffff" }} />
          </IconButton>
          <Typography sx={{ color: "#fff" }}>CI Dashboard</Typography>
        </NavbarBox>
        <NavbarBox>
          <Tooltip title="Toggle Light/Dark Theme">
            <CustomSwitch checked={theme === "dark"} onChange={toggleTheme} />
          </Tooltip>
          <IconButton onClick={handleClick}>
            <AccountCircleOutlinedIcon
              style={{ fontSize: 25, color: "white" }}
            />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </NavbarBox>
      </CustomNavbar>
    </>
  );
};

export default Navbar;
