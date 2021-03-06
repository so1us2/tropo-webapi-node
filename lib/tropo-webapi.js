var base = require('./base');

/**
* Primary Tropo WebAPI class and prototype methods.
*
*/
TropoWebAPI = function() {
    this.tropo = new Array();
};

TropoWebAPI.prototype.ask = function(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout, allowSignals, promptLogSecurity, asrLogSecurity, maskTemplate) {
    var ask = new base.Ask(choices, attempts, bargein, minConfidence, name, recognizer, required, say, timeout, voice, interdigitTimeout, sensitivity, speechCompleteTimeout, speechIncompleteTimeout, allowSignals, promptLogSecurity, asrLogSecurity, maskTemplate);
    this.tropo.push({"ask": ask});
};

TropoWebAPI.prototype.call = function(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals, machineDetection, voice, callbackUrl, promptLogSecurity, label) {
    var call = new base.Call(to, answerOnMedia, channel, from, headers, name, network, recording, required, timeout, allowSignals, machineDetection, voice, callbackUrl, promptLogSecurity, label);
    this.tropo.push({"call": call});
};

TropoWebAPI.prototype.conference = function(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout, joinPrompt, leavePrompt, promptLogSecurity) {
    var conference = new base.Conference(id, mute, name, playTones, required, terminator, allowSignals, interdigitTimeout, joinPrompt, leavePrompt, promptLogSecurity);
    this.tropo.push({"conference": conference});
};

TropoWebAPI.prototype.hangup = function() {
    var hangup = new base.Hangup();
    this.tropo.push({"hangup": hangup});
};

TropoWebAPI.prototype.joinPrompt = function(value, voice) {
    var joinPrompt = new base.JoinPrompt(value, voice);
    this.tropo.push({"joinPrompt": joinPrompt});
};

TropoWebAPI.prototype.leavePrompt = function(value, voice) {
    var leavePrompt = new base.LeavePrompt(value, voice);
    this.tropo.push({"leavePrompt": leavePrompt});
};

TropoWebAPI.prototype.machineDetection = function(introduction, voice) {
    var machineDetection = new base.machineDetection(introduction, voice);
    this.tropo.push({"machineDetection": machineDetection});
};

TropoWebAPI.prototype.message = function(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice, promptLogSecurity) {
    var message = new base.Message(say, to, answerOnMedia, channel, from, name, network, required, timeout, voice, promptLogSecurity);
    this.tropo.push({"message": message});
};

TropoWebAPI.prototype.on = function(event, name, next, required, say, ask, message, wait, post) {
    var on = new base.On(event, name, next, required, say, ask, message, wait, post);
    this.tropo.push({"on": on});
};

TropoWebAPI.prototype.record = function(attempts, asyncUpload, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout, promptLogSecurity, sensitivity) {
    var record = new base.Record(attempts, asyncUpload, bargein, beep, choices, format, maxSilence, maxTime, method, minConfidence, name, required, say, timeout, transcription, url, password, username, voice, allowSignals, interdigitTimeout, promptLogSecurity, sensitivity);
    this.tropo.push({"record": record});
};

TropoWebAPI.prototype.redirect = function(to, name, required) {
    var redirect = new base.Redirect(to, name, required);
    this.tropo.push({"redirect": redirect});
};

TropoWebAPI.prototype.reject = function() {
    var reject = new base.Reject();
    this.tropo.push({"reject": reject});
};

TropoWebAPI.prototype.say = function(value, as, event, name, required, voice, allowSignals, promptLogSecurity, media) {
    var say = new base.Say(value, as, event, name, required, voice, allowSignals, promptLogSecurity, media);
    this.tropo.push({"say": say});
};

TropoWebAPI.prototype.startRecording = function(asyncUpload, format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI, transcriptionLanguage) {
    var startRecording = new base.StartRecording(asyncUpload, format, method, url, username, password, transcriptionID, transcriptionEmailFormat, transcriptionOutURI, transcriptionLanguage);
    this.tropo.push({"startRecording": startRecording});
};

TropoWebAPI.prototype.stopRecording = function() {
    var stopRecording = new base.StopRecording();
    this.tropo.push({"stopRecording": stopRecording});
};

TropoWebAPI.prototype.transfer = function(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection, playTones, voice, callbackUrl, promptLogSecurity, label) {
    var transfer = new base.Transfer(to, answerOnMedia, choices, from, headers, name, on, required, terminator, timeout, allowSignals, interdigitTimeout, ringRepeat, machineDetection, playTones, voice, callbackUrl, promptLogSecurity, label);
    this.tropo.push({"transfer": transfer});
};

TropoWebAPI.prototype.wait = function(milliseconds, allowSignals){
    var wait = new base.Wait(milliseconds, allowSignals);
    this.tropo.push({"wait": wait});
};

TropoWebAPI.prototype.generalLogSecurity = function(state){
    var generalLogSecurity;
    if (state == null) {
        throw new Error("Missing required property: 'state'");
    } else {
        if ((state === "suppress") || (state === "none")) {
            generalLogSecurity = state;
        } else {
            throw new Error("The value of 'state' must be a string: 'none' or 'suppress'");
        }
    }
    this.tropo.push({"generalLogSecurity": generalLogSecurity});
};

TropoWebAPI.prototype.answer = function(headers){
    var answer = new base.Answer(headers);
    this.tropo.push({"answer": answer});
};

exports.TropoWebAPI = TropoWebAPI;

/**
* Helper class to render JSON for Tropo WebAPI.
*
*/
TropoJSON = function(object) {
    return JSON.stringify(object, base.replaceNull);
};
exports.TropoJSON = TropoJSON;

//TODO: Complete header method.
Headers = function() {

};
exports.Headers = Headers;
