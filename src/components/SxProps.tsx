import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

function SxProps() {
  const [clicked, setClicked] = useState(false);
  return (
    <Box>
      <Typography variant="h1" sx={{ color: "primary.contrastText", mb: 2 }}>
        Hello, I am{" "}
        <Typography
          component="span"
          variant="h1"
          sx={{ color: "primary.main" }}
        >
          Surya Kumar D
        </Typography>
      </Typography>
      <Typography variant="h2" sx={{ color: "primary.contrastText", mb: 2 }}>
        A{" "}
        <Typography
          component="span"
          variant="h2"
          sx={{ color: "primary.main" }}
        >
          Full Stack Developer
        </Typography>
      </Typography>
      <Button
        onClick={() => setClicked(!clicked)}
        variant="contained"
        sx={[
          {
            bgcolor: { md: "red", xl: "purple" },
            "&:hover": {
              bgcolor: "info.main",
            },
          },
          clicked && {
            bgcolor: "secondary.main",
          },
        ]}
      >
        Click Me
      </Button>
    </Box>
  );
}

export default SxProps;
