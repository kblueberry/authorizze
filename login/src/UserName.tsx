import TextField from "@mui/material/TextField";

export default function UserName({
  login,
  valueChange,
}: {
  login: string;
  valueChange: (value: string) => void;
}) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="dense"
        value={login}
        required={true}
        onChange={(event) => valueChange(event.target.value)}
      />
    </>
  );
}
