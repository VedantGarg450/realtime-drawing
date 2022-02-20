leftWristX=""
leftWristY=""
rightWristX=""
rightWristY=""
function preload(){
}
function setup(){
    video= createCapture(VIDEO)
    video.size(800, 800)
    video.position(100, 80)
    canvas= createCanvas(600, 600)
    canvas.position(970, 175)
    posenet= ml5.poseNet(video, modelLoaded)
    posenet.on("pose", gotResult)
}
function gotResult(result){
    if(result.length>0){
        console.log(result)
        leftWristX= result[0].pose.leftWrist.x
        leftWristY= result[0].pose.leftWrist.leftWrist.y
        rightWristX= result[0].pose.rightWrist.x
        rightWristY= result[0].pose.rightWrist.y
    }
}
function modelLoaded(){
    console.log("Model Loaded Successfully!")
}
function draw(){
    background("#db8400")
}
