import { Box, Typography } from "@mui/material";

function SxProps() {
  return (
    <Box>
      <Typography variant="h1" sx={{ color: "primary.contrastText" }}>
        Hello, I am{" "}
        <Typography
          component="span"
          variant="h1"
          sx={{ color: "primary.main" }}
        >
          Surya Kumar D
        </Typography>
      </Typography>
    </Box>
  );
}

export default SxProps;
