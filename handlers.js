const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    let speechText = "Welcome to your Interactive Bookmark.  You can add a book, and bookmark a page.  You can even leave a brief description of your stopping point.  Ask me for help for more information.";     //Find a better way to word this, more specific
    let repromptText = "I did not hear a response.  Ask help for more information.";

    // Speak out the speechText via Alexa
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .getResponse();
  }
};

const AddBookHandler = {
  canHandle(handlerInput){
    return (
      handlerInput.requestEnvelope.request.type === 'IntentRequest' &&
      handlerInput.requestEnvelope.request.intent.name === 'AddBook'
      );
  },
  handle(handlerInput){
    console.log('AddBookHandler called');
    
    let bookName = handlerInput.requestEnvelope.request.intent.slots.BOOK.value;
    let pageNumber = handlerInput.requestEnvelope.request.intent.slots.PAGE.value;
    let id = handlerInput.requestEnvelope.request.intent.slots.id.value;
    
    const speechText = `Got it, I added ${id}, page ${pageNumber}, to the list of books you are reading.  Don't forget to remove it when you are finished.`;
    let repromptText = 'Sorry, I did not catch that.';
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(repromptText)
      .getResponse();
  }
};

module.exports = {
    LaunchRequestHandler, AddBookHandler
};