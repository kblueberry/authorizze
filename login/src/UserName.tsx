import TextField from "@mui/material/TextField";

export default function UserName({
  valueChange,
}: {
  valueChange: (value: string) => void;
}) {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        margin="dense"
        required={true}
        onChange={(event) => valueChange(event.target.value)}
      />
    </>
  );
}
