import{Box,Container,Grid,Typography,IconButton} from "@mui/material"

const SearchResults =()=>{

return(
<Box>
    <Container>
        <IconButton>
            {/* el icon flecha */}
        </IconButton>
    </Container>
    <Grid container spacing={3}>
        <Grid item xs={12}>
            <Typography>
                Search /
            </Typography>

        </Grid>
    </Grid>
</Box>

)


}

export default SearchResults;