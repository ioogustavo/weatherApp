const { Router } = require("express");
const router = Router();
const axios = require("axios");
const admin = require("firebase-admin");

var serviceAccount = require("../../weatherapp-b0801-firebase-adminsdk-zmxj4-cf7cf7806e.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://weatherapp-b0801-default-rtdb.firebaseio.com/",
});

const db = admin.database();

router.get("/allCities", (req, res) => {
  db.ref("provincias").once("value", (snapshot) => {
    const data = snapshot.val();
    res.send({ hola: data });
  });
});

module.exports = router;
