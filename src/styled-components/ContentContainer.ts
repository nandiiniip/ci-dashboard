import { Box,styled } from "@mui/material";

const ContentContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"flex-start",
    marginTop: "4.5rem",
    minHeight:"calc(100vh - 4.5rem)",
    width: "100%",
    height: "100%",
}))

export default ContentContainer;