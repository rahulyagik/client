import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../store/action/add";

const initialUserState = {
  first_name: "",
  last_name: "",
  gender: "",
};

const useStyles = makeStyles({
  root: {
    padding: "24px 50px 50px",
    margin: "24px",
    border: "1px solid #2e2e2e",
    borderRadius: "8px",
  },
  header: {
    textAlign: "center",
    margin: "0px 0px 32px !important",
    fontWeight: "500 !important",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
});

const InputContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [user, setUser] = useState(initialUserState);

  const userHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const tempUser = { id: Math.floor(Math.random() * 100), ...user };
    dispatch(addToList(tempUser));
    setUser(initialUserState);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.header}>
        Fill the Form to Add Name
      </Typography>
      <form onSubmit={submitHandler} className={classes.form}>
        <FormControl fullWidth>
          <TextField
            label={"First Name"}
            name={"first_name"}
            required
            value={user.first_name}
            onChange={userHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <TextField
            label={"Last Name"}
            name={"last_name"}
            value={user.last_name}
            onChange={userHandler}
          />
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="gender">Gender</InputLabel>
          <Select
            labelId="gender"
            label={"Gender"}
            name={"gender"}
            value={user.gender}
            onChange={userHandler}
          >
            <MenuItem value={"m"}>Male</MenuItem>
            <MenuItem value={"f"}>Female</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default InputContainer;
