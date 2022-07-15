import { MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  
  console.log({country});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value as string);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="Italy">Italy</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
