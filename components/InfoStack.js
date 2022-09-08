import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import Image from "next/image";
import profilePic from "../public/proj-imgs/virtulib-sample.jpg";
import InfoChips from "./InfoChips";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import { Divider } from "@mui/material";
import HexagonIcon from "./HexagonIcon";
import { useTheme } from "@mui/material";
import iconMap from "../util/iconMap";
import { v4 as uuidv4 } from "uuid";

function InfoStack(props) {
  const {
    projectName = "",
    projectTools = [],
    projectImageUrl = "",
    projectDescription = "",
    projectLinks = [],
    reverse = false,
  } = props;

  const theme = useTheme();

  const clickLinks = iconMap(projectLinks, <Box />, projectName);
  const projectClickLinks = clickLinks.map((link) => {
    return (
      <Box id={`${projectName}-${link.name.toLowerCase()}-link`} key={uuidv4()}>
        {link.icon}
      </Box>
    );
  });

  return (
    <Box mt={4}>
      <Stack
        justifyContent="space-between"
        alignItems="center"
        direction={reverse ? "row-reverse" : "row"}
        gap={5}
      >
        <Box sx={{ width: { xs: "100%", md: "45%" } }}>
          <Typography variant="h3">{projectName}</Typography>
          <Box mt={1}>
            <InfoChips infoList={projectTools} />
          </Box>
          <Typography variant="body1" mt={3}>
            {projectDescription}
          </Typography>
          <Stack
            className="project-link-stack"
            direction="row"
            spacing={0.5}
            alignItems="center"
            mt={1}
          >
            {projectClickLinks}
          </Stack>
        </Box>
        <Box
          sx={{
            width: { xs: "100%", md: "40%" },
            margin: "0 auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <Box>
            <Image
              style={{ borderRadius: "10px" }}
              src={projectImageUrl}
              width="500"
              height="350"
              priority
            />
          </Box>
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
