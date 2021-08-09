const express = require("express");
const app = express();
const port = 2021

const waktu = (req, res, next) => {
    const tanggal = new Date();
    const n = tanggal.toString();
    console.log(n);
    next();
};
app.use(express.json());
app.use(waktu);
let catatan = [
    {
        id: 1,
        content: "Latihan backend di hari pertama",
        date: "3 Agustus 2021",
        important: true
      },
      {
        id: 2,
        content: "Pengumpulan Tugas backend pertama",
        date: "8 Agustus 2021",
        important: true
      }  
]
app.get("/catatan",(req, res) => {
    res.send(catatan);
});
app.get("/catatan/:nomor", (req, res) => {
    const nomor = Number(req.params.nomor);
    const nemucatatan = catatan.find( nemucatatan => nemucatatan.id === nomor);
    res.send(nemucatatan);
});
app.post("/catatan", (req,res) => {
    const tambahcatatan = req.body;
    catatan.push(tambahcatatan);
    res.json(tambahcatatan);
});
app.delete("/catatan/:nomor", (req, res) => {
    const nomor = Number(req.params.nomor);
    const hapuscatatan = catatan.filter( hapuscatatan => hapuscatatan.id != nomor);
    res.send(hapuscatatan);
});
app.put("/catatan/:nomor", (req, res) => {
    const nomor = Number(req.params.nomor);
    const updatecatatan = catatan.find( updatecatatan => updatecatatan.id === nomor);
    updatecatatan.content = "update pertama";
    updatecatatan.important = false;
    res.send(updatecatatan);
});
app.listen(port, (req,res) => {
    console.log("server running on port :" +port);
})