import TextField from "@mui/material/TextField";

export default function UserName({ valueChange }: { valueChange: Function }) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        margin="dense"
        required={true}
        onChange={(event) => valueChange(event.target.value)}
      />
    </>
  );
}
