import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Drawer,
  styled,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  buildOpen: boolean;
  onBuildClick: () => void;
}

const CustomDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    top: "73px",
    height: "calc(100vh - 60px)",
    width: 235,
  },
}));

const CustomListItemText = styled(ListItemText)(() => ({
"& .MuiTypography-root": {
    fontSize: "0.85rem",
    fontWeight: 600,
  },
}));

const Sidebar = ({ open, buildOpen, onBuildClick }: SidebarProps) => {
  return (
    <>
      <CustomDrawer variant="persistent" anchor="left" open={open}>
        <List sx={{ width: 250 }}>
          <ListItemButton onClick={onBuildClick}>
            <CustomListItemText primary="Build" />
            {buildOpen ? <ExpandLess/> : <ExpandMore/>}
          </ListItemButton>

          <Collapse in={buildOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                component={Link}
                to="/build/overview"
                sx={{ pl: 4 }}
              >
                <CustomListItemText primary="Overview" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/build/create"
                sx={{ pl: 4 }}
              >
                <CustomListItemText primary="Create Build" />
              </ListItemButton>
              <ListItemButton
                component={Link}
                to="/build/edgetrain"
                sx={{ pl: 4 }}
              >
                <CustomListItemText primary="EdgeTrain" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
      </CustomDrawer>
    </>
  );
};

export default Sidebar;
