import {
  Typography,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

export default function Contact() {
  const contactInfo = "Email Adress: jmhe222@gmail.com";
  //const backgroundColor = "#1976d2";

  return (
    <Box
      sx={{
        mt: 2,
        py: 3,
        width: "100%",
        backgroundColor: "#0D47A1",
        borderTop: "4px solid #1E88E5",
      }}
    >
      <BottomNavigation showLabels sx={{ my: 3, backgroundColor: "#0D47A1" }}>
        <BottomNavigationAction
          sx={{
            color: "#fff",
          }}
          label={<span style={{ fontSize: 20 }}>Github</span>}
          icon={<GitHubIcon fontSize="large" />}
          target="_blank"
          href="https://github.com/Jheil7"
        />
        <BottomNavigationAction
          sx={{ color: "#fff", fontSize: "large" }}
          label={<span style={{ fontSize: 20 }}>Linkedin</span>}
          icon={<LinkedInIcon fontSize="large" />}
          target="_blank"
          href="https://www.linkedin.com/in/joseph-m-heil/"
        />
        <BottomNavigationAction
          sx={{ color: "#fff" }}
          label={<span style={{ fontSize: 20 }}>Itch.io</span>}
          icon={<LanguageIcon fontSize="large" />}
          target="_blank"
          href="https://jmhe222.itch.io"
        />
      </BottomNavigation>
      <Typography sx={{ fontSize: 20, textAlign: "center", color: "#fff" }}>
        {contactInfo}
      </Typography>
    </Box>
  );
}
