import React, { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";

const MuiTextFiled = () => {
  const [value, setValue] = useState("");
  

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="standard" />
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Small Secondary"
          size="small"
          color="secondary"
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          error = {!value}
          helperText={!value? "Required": "Do not share your password with anyone" }
        ></TextField>
        <TextField
          label="password"
          type="password"
          helperText="Do not share your password with anyone"
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};

export default MuiTextFiled;
