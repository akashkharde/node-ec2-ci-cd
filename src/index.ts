import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("The app is working 🙌");
});

app.get("/random", (req: Request, res: Response) => {
  const randomData = {
    id: Math.floor(Math.random() * 10000),
    name: ["Akash", "Rohan", "Praj", "Nikhil"][
      Math.floor(Math.random() * 4)
    ],
    age: Math.floor(Math.random() * 30) + 18,
    isActive: Math.random() > 0.5,
    createdAt: new Date().toISOString(),
  };

  return res.status(200).json({
    success: true,
    data: randomData,
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on PORT ${PORT}`);
});
