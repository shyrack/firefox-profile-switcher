import { Paper, styled, Typography } from "@mui/material";

const RootPaper = styled(Paper)(
  ({ theme }) => ({
    padding: theme.spacing(1),
  }),
  {
    name: "RootPaper",
  }
);

export default function App() {
  return (
    <main>
      <RootPaper variant={"outlined"}>
        <Typography>hello world!</Typography>
      </RootPaper>
    </main>
  );
}
