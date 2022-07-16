import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../store/action/delete";

const useStyles = makeStyles({
  root: {
    padding: "24px 50px 50px",
    margin: "24px",
    border: "1px solid #2e2e2e",
    borderRadius: "8px",
    minHeight: "73%",
  },
  header: {
    textAlign: "center",
    fontWeight: "500 !important",
    margin: "0px 0px 32px !important",
  },
  listItemWrap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #2e2e2e",
    padding: "8px 0 8px 16px",
    borderRadius: "8px",
  },
});

const ListContainer = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const list = useSelector((state) => state.add);
  const deleteHandler = (id) => {
    dispatch(deleteItem(id));
  };
  return (
    <Box className={classes.root}>
      <Typography variant="h5" className={classes.header}>
        List of Names Added
      </Typography>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <ListItemText>
              <Box className={classes.listItemWrap}>
                <Box>
                  {item.gender === "m"
                    ? `Mr. ${item.first_name} ${item.last_name}`
                    : item.gender === "f"
                    ? `Mrs. ${item.first_name} ${item.last_name}`
                    : `${item.first_name} ${item.last_name}`}
                </Box>
                <Button onClick={() => deleteHandler(item.id)}>X</Button>
              </Box>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListContainer;
