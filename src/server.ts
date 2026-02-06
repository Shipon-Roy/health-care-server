import app from "./app";

const PORT = 4000;

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
