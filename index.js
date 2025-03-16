const express = require('express');
const path = require('path');

const scenesRoutes = require('./routes/sceneRoutes');
const deviceRoutes = require('./routes/deviceRoutes');
const roomRoutes = require('./routes/roomRoutes');
const actionRoutes = require('./routes/actionRoutes');
const action_sceneRoutes = require('./routes/action_sceneRoutes');
const device_sceneRoutes = require('./routes/device_sceneRoutes');
const room_deviceRoutes = require('./routes/room_deviceRoutes');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static("public"));
app.use("/scenes", scenesRoutes);
app.use("/devices", deviceRoutes);  
app.use("/rooms", roomRoutes);
app.use("/actions", actionRoutes);
app.use("/action_scenes", action_sceneRoutes);
app.use("/device_scenes", device_sceneRoutes);
app.use("/room_devices", room_deviceRoutes);
const PORT = 7777;
app.listen(PORT, () =>{
    console.log("Servidor Activo Papi");
});
