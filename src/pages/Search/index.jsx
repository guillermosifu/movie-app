import {
  Box,
  Container,
  Grid,  
  Typography,
  Card,
  CardContent,
  TextField,
  Stack,
  Button
} from "@mui/material";

import React from "react";

const Search = () => {
  return (
    <Box>
      <Container maxWidth = "sm">
        <Grid container mt={6}>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant ="h2">OMDB Search</Typography>
                <Stack mt="2" direction="row" justifyContent="space-between" spacing={3}>
                <TextField 
                label="Movie or tv Show"
                fullWidth/>
                <Button variant="contained" fullWidth>
                  Search
                </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Search;
