const Alexa = require('ask-sdk');

const LaunchHandlerIntent = {
    canHandle(handlerInput){
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput){
        const speechtext = `Hello everyone, this is an example for David\'s presentation.  The invocation name of this Alexa skill is "project presentation" and he called the intent when he said "give an introduction."`;
        
        return handlerInput.responseBuilder
        .speak(speechtext)
        .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchHandlerIntent
    )
    .lambda();