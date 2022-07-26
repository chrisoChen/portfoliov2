import CopyrightIcon from "@mui/icons-material/Copyright";
import { Container } from "@mui/material";
import { Stack, Typography } from "@mui/material";
function Copyright() {
  return (
    <Container variant="section" sx={{ py: 0, my: 0 }}>
      <Stack justifyContent="center" alignItems="center" gap={1}>
        <CopyrightIcon
          fontSize="small"
          sx={{ color: "secondaryAlt.main" }}
        ></CopyrightIcon>
        <Typography
          variant="body2"
          sx={{ display: { xs: "none", md: "initial" } }}
        >
          All rights reserved
        </Typography>
      </Stack>
    </Container>
  );
}

export default Copyright;
