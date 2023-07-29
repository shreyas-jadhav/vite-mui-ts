import {
  Button,
  CssBaseline,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useState } from "react";

import theme from "@/utils/theme";

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
        <Typography variant="h4">
          Vite + React + Material UI v5 + TypeScript
        </Typography>

        <Button
          variant="contained"
          onClick={() => setCount((prev) => prev + 1)}
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
