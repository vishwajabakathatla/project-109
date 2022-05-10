Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_format: 92
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.iageClassifier('//https://teachablemachine.withgoogle.com/models/CWgoqqYwj/model.json', modelLoaded)

function modelLoaded() {
    console.log('Model loaded!');
}

function speak() {
    var synth = window.SpeechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "The second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}
















