import { Grid, Container, Box } from "@mui/material";

import { Usestate } from "../hooks/Usestate";
import { Useeffect } from "../hooks/Useeffect";
import { Usecontext } from "../hooks/Usecontext";
import { Useref } from "../hooks/Useref";
import { Usereducer } from "../hooks/Usereducer";
import { Usecallback } from "../hooks/Usecallback";
import { Usememo } from "../hooks/Usememo";
import { Custom } from "../hooks/Custom";

export default function Offers() {
  return (
    <Container sx={{ mt: 6, mb: 6 }}>
      <Grid container spacing={4} alignItems="stretch">

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Usestate />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Useeffect />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Usecontext />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Useref />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Usereducer />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Usecallback />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Usememo />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ height: "100%" }}>
            <Custom />
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
}