import {
  Button,
  CssBaseline,
  Link,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import theme from "./utils/theme";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Stack
        sx={{
          height: "100vh",
        }}
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <Stack direction="row" spacing={1}>
          <Link href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} alt="Vite logo" />
          </Link>
          <Link href="https://react.dev" target="_blank">
            <img src={reactLogo} alt="React logo" />
          </Link>
        </Stack>
        <Typography variant="h4">
          Vite + React + Material UI v5 + TypeScript
        </Typography>

        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <Typography variant="body1">
          Edit <code>src/App.tsx</code> and save to test HMR
        </Typography>

        <Typography variant="body1">
          Click on the Vite and React logos to learn more
        </Typography>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
