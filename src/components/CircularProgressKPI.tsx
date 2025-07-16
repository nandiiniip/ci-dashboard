import { Box, CircularProgress, Typography } from "@mui/material";

export default function CircularProgressKPI({ value }: { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        value={value}
        size={30}
        thickness={3.5}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ fontSize: "0.6rem", fontWeight: 600 }}
        >
          {`${value}%`}
        </Typography>
      </Box>
    </Box>
  );
}
