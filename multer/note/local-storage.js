const upload = multer({ dest: "uploads/" }); //for local storage destination

app.post("/profile", upload.single("avatar"), (req, res) => {
  res.send("file uploaded success");
});
