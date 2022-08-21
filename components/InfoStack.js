import { Stack } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/proj-imgs/virtulib-sample.jpg";
import InfoChips from "./InfoChips";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "@mui/material/Link";
import { ConstructionOutlined } from "@mui/icons-material";
import { Divider } from "@mui/material";
import HexagonIcon from "./HexagonIcon";
import { useTheme } from "@mui/material";
import { ClassNames } from "@emotion/react";

function InfoStack(props) {
  const {
    reverse = false,
    projectTools = [
      "Python",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
      "JavaScript",
    ],
    projectLinks = {
      github: "https://mui.com/material-ui/material-icons/?query=github",
      live: false,
    },
  } = props;

  const theme = useTheme();

  const githubLink = projectLinks.github ? (
    <Stack direction="row" spacing={0.5} alignItems="center" mt={1}>
      <Link
        href={projectLinks.github}
        aria-label="Link to company's website."
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={{
          display: "flex",
          alignItems: "center",
          "&:hover": { opacity: "0.65", transition: "0.3s" },
        }}
      >
        <GitHubIcon sx={{ color: "secondary.main" }} />
      </Link>
      <Link
        href={projectLinks.github}
        aria-label="Link to company's website."
        target="_blank"
        rel="noopener noreferrer"
        color="secondary.main"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <GitHubIcon sx={{ color: "secondary.main" }} />
      </Link>
    </Stack>
  ) : null;

  return (
    <Box mt={4}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction={reverse ? "row-reverse" : "row"}
        gap={5}
      >
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <Typography variant="h3">Project 1 Heading</Typography>
          <Box mt={1}>
            <InfoChips infoList={projectTools} />
          </Box>
          <Typography variant="body1" mt={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            deleniti ullam ut nemo pariatur facilis perferendis quidem illo
            quam! Rerum, quibusdam odio accusamus, ea exercitationem vero
            tempora placeat incidunt numquam ut porro quos? Est aspernatur
            eligendi aliquid dolorem, id, labore culpa iure laudantium
            repellendus natus nostrum dicta esse fugit iste.
          </Typography>
          {githubLink}
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            margin: "0 auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={profilePic}
            alt="A cartoon portrait of the software developer, Chris Chen. Chris poses directly at the camera and his glasses have been colored yellow and turquoise for a heightened cartoon look."
          />
        </Box>
      </Stack>
      <Divider
        sx={{ mt: 4 }}
        textAlign={reverse ? "right" : "left"}
        className="textDivider"
      >
        <HexagonIcon fill={theme.palette.secondary.main} />
      </Divider>
    </Box>
  );
}

export default InfoStack;
