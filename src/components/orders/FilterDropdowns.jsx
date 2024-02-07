import React from "react";
import { MenuItem, Menu, Button, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterDropdowns = () => {
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  return (
    <div>
      <Stack style={{ marginLeft: "1rem" }} direction="row" gap={20}>
        <Button onClick={handleClick1} endIcon={ <ExpandMoreIcon />}>Gold Ring</Button>
        <Menu
          anchorEl={anchorEl1}
          open={Boolean(anchorEl1)}
          onClose={handleClose1}
        >
          <MenuItem>Gold 24 Carate</MenuItem>
          <MenuItem>Silver 12</MenuItem>
          <MenuItem>Option 3</MenuItem>
        </Menu>

        <Button onClick={handleClick2} endIcon={ <ExpandMoreIcon />}>Silver Ring</Button>
        <Menu
          anchorEl={anchorEl2}
          open={Boolean(anchorEl2)}
          onClose={handleClose2}
        >
          <MenuItem>Option A</MenuItem>
          <MenuItem>Diamond </MenuItem>
          <MenuItem>Catagory</MenuItem>
        </Menu>

        <Button onClick={handleClick3} endIcon={ <ExpandMoreIcon />}>Diamond Ring</Button>
        <Menu
          anchorEl={anchorEl3}
          open={Boolean(anchorEl3)}
          onClose={handleClose3}
        >
          <MenuItem>Filter 1</MenuItem>
          <MenuItem>Filter 2</MenuItem>
          <MenuItem>Filter 3</MenuItem>
        </Menu>
        <Button variant="contained" style={{ marginLeft: "5.5rem" }}>
          Filter
        </Button>
      </Stack>
    </div>
  );
};

export default FilterDropdowns;
