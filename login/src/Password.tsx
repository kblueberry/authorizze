import TextField from "@mui/material/TextField";

export default function Password({ valueChange }: { valueChange: Function }) {
  return (
    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      margin="dense"
      required={true}
      onChange={(event) => valueChange(event.target.value)}
    />
  );
}
