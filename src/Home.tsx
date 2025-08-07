import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

export default function Home() {
  return (
    <Box component="main" sx={{ p: 0 }}>
      <Toolbar />
      <Typography>About me info: Things about Joey</Typography>
      <Typography>
        Skills Section: Skills that Joey most definitely has.
      </Typography>
    </Box>
  );
}
