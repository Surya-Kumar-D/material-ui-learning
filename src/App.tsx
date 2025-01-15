import { Box } from "@mui/material";
import SxProps from "./components/SxProps";

function App() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SxProps />
    </Box>
  );
}

export default App;
