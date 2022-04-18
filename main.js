var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){

    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}
recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;
    console.log(content);
    if(content == "take my selfie"){

        console.log("taking selfie");
        speak();
        
    }

    document.getElementById("textbox").innerHTML = content;

    

}



function speak(){

    var synth = window.speechSynthesis;
    speakdata = "taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function(){

        takeSnapShot();
        save();
        

    },5000);
    
}

Webcam.set({

    width:360,
    height:250,
    image_format:'png',
    png_quality: 100
});

camera = document.getElementById("camera");


function takeSnapShot(){

    Webcam.snap(function(data_uri){

        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + data_uri + '">';

    });

}

function save(){

    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();

}

