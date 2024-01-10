function startClassification(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = m15.soundclassifier('https://teachablemachine.withgoogle.com/models/C-6namTSS/model.json', modelReady);
}
function modelReady() {
classifier.classify(gotResults);
}
function gotResults(){

}