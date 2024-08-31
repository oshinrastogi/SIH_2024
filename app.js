const express = require("express");
const dotenv = require("dotenv");
const main = require("./config.js");
const cors = require("cors");
const authRoute = require("./routes/authRoute.js");
const { v4: uuidv4 } = require('uuid');
const fs = require("fs");
const multer = require("multer");
const {exec} = require("child_process"); // watch out -> it's a dangerous command
const path = require("path")
dotenv.config();
const app = express();


// multer middleware
const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null , "./uploads")
    } , 
    filename: function(req , file , cb){
        cb(null , file.fieldname + "-" + uuidv4() + path.extname(file.originalname));
    }
})


app.use(cors({
    origin : "http://localhost:5173" ,
    credentials : true
}));
app.use((req , res , next)=> {
    res.header("Access-Control-Allow-Origin" , "*");  // watch it
    res.header("Access-Control-Allow-Headers" , "Origin , X-Requested-With , Content-Type , Accept");
    next();
});
app.use(express.json());
app.use(express.urlencoded({extended: true}));
// where you serve static files
app.use("/uploads" , express.static("uploads"));

// multer configuration
const upload = multer({storage : storage});

// post api
// app.post("/upload" , upload.single('file') , (req , res)=> {
//     console.log("Files uploaded");
//     res.json({message : "File uploaded"});
// });

app.post("/upload" , upload.single('file') , (req , res)=> {
    const lessonId = uuidv4();
    const videoPath = req.file.path;
    const outputPath = `./uploads/courses/${lessonId}`
    const hlsPath = `${outputPath}/index.m3u8`; // read about m3u8

    if (!fs.existsSync(outputPath)){
        // if outputPath not exist then create it
        fs.mkdirSync(outputPath , {recursive : true});
    }

    // ffmpeg
    const ffmpegCommand = `ffmpeg -i ${videoPath} -codec:v libx264 -codec:a aac -hls_time 10 -hls_playlist_type vod -hls_segment_filename "${outputPath}/segment%03d.ts" -start_number 0 ${hlsPath}`;


    // no queue because of proof of concepts
    exec(ffmpegCommand , (error , stdout , stderr)=>{
        if (error){
            console.log(`exec error : ${error}`);
        }
        console.log(`stdout : ${stdout}`);
        console.log(`stderr : ${stderr}`);
    });

    const videoUrl = `http://localhost:8000/uploads/courses/${lessonId}/index.m3u8`;

    res.json({
        message : "Video Converted to hls version",
        videoUrl : videoUrl ,
        lessonId : lessonId
    })
});



main();


app.use("/api/v1/auth" , authRoute);


app.listen(process.env.PORT , ()=> {
    console.log("app is listening...");
});