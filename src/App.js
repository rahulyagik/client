import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputContainer from "./components/InputContainer";
import ListContainer from "./components/ListContainer";

const useStyles = makeStyles({
  root: {
    marginTop: "50px",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item sm={6}>
          <InputContainer />
        </Grid>
        <Grid item sm={6}>
          <ListContainer />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
