import app from "./app";
import { envVars } from "./config/env";

const PORT = envVars.PORT;

const bootstrap = () => {
  try {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Faild to start server", err);
  }
};

bootstrap();
