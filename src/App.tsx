import {
  Button,
  ButtonGroup,
  Divider,
  Paper,
  styled,
  Typography,
} from "@mui/material";

const RootPaper = styled(Paper)(
  {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
  },
  {
    name: "RootPaper",
  }
);

const Header = styled(Typography)(
  ({ theme }) => ({
    margin: theme.spacing(2),
  }),
  {
    name: "Header",
  }
);

export default function App() {
  return (
    <RootPaper variant={"outlined"}>
      <Header variant={"h6"}>Profile Switcher</Header>
      <Divider />
      <ButtonGroup orientation={"vertical"}>
        <Button>One</Button>
        <Button>Two</Button>
      </ButtonGroup>
    </RootPaper>
  );
}
