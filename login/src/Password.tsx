import TextField from "@mui/material/TextField";

export default function Password({
  password,
  valueChange,
}: {
  password: string;
  valueChange: (value: string) => void;
}) {
  return (
    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      margin="dense"
      value={password}
      required={true}
      onChange={(event) => valueChange(event.target.value)}
    />
  );
}
