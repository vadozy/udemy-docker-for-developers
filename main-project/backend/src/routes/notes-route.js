import express from "express";

const router = express.Router();

router.get("/notes", (req, res) => {
  res.send("Hello from notes route");
});
router.get("/notes/:id", (req, res) => {
  res.send(`You requested note ${req.params.id}`);
});
router.post("/notes", () => {});
router.delete("/notes/:id", () => {});
router.patch("/notes/:id", () => {});

export default router;
