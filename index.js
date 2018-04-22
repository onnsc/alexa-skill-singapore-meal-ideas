var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = 'amzn1.ask.skill.6d14533f-2f6a-4ae2-b7c0-300266593567';
  alexa.registerHandlers(chefIntentsHandler); //remember to change this to match your Handler
  alexa.execute();
};


// note that the name here is chef 
var chefIntentsHandler = {

    'LaunchRequest': function(){
        this.emit(':ask',
        'Hi Madame ou monsieur, for meal suggestions, ask me, \"what should I cook?\"'
        );
    },
    // launch closing

    'MealIntent': function(){

        var starter = [
            'Perhaps you\'d like ',
            'How about ',
            'What about ',
            'Maybe you\'d like ',
            'Maybe ',
            'Perhaps '
        ]; //starter text closing

        var meal = [
            "a Japanese cuisine like curry pork chop with crab croquette, tempura vegetables, and potato salad? ",
            "a Chinese cuisine like gong bao chicken with, sauteed kai lan, fu rong egg, winter melon pork rib soup, and rice? ",
            "a Chinese cuisine like sweet and sour pork with, sauteed spinach, claypot tofu, herbal chicken soup, and rice? ",
            "an Italian cuisine like carbonara with mushroom soup, and chicken caesar salad? ",
            "a French cuisine like steak with chicken caesar salad, pan-seared foie gras and garlic mushroom? ",
            "a Western cuisine like chicken chop with potato wedges, coleslaw and Campbell tomato soup? ",
            "an Indian cuisine like chicken tika masala with garlic naan, mutton curry and lentils? ",
            "a Chinese cuisine like hainanese chicken rice with sauteed milk cabbage, prawn omelet and herbal chicken soup? ",
            "a Korean cuisine like spicy pork bimbimbap with side dishes like black beans, kim chi, anchovies and seaweed soup? ",
            "a Malay cuisine like nasi lemak with chicken rendang and sambal kang kong? ",
            "a Japanese cuisine like tonkatsu pork cutlet with chawamushi, sliced cabbage , and miso soup? ",
            "a Italian cuisine like Pepperoni pizza with garlic bread, chicken wings and mushroom soup? ",
            "a Western cuisine like fish and chips with coleslaw, mac and cheese and minestrone soup? ",
            
        ]; // meal hard-coded data closing


        this.emit(':ask',
        starter[Math.floor(Math.random() * starter.length)] +
        meal[Math.floor(Math.random() * meal.length)] +
        'For more meal ideas, you can say, \"next please\"'
        )
    },
    // meal closing

    'CategoryIntent': function(){
        this.emit(':ask',
        'We\'ve got Chinese, Malay, Indian, Korean, Japanese, Italian, French, Western cuisines for now. ' +
        'Shall I suggest a meal?'
        )
    },
    // category closing

    'RecipeIntent': function(){
        this.emit(':ask',
        'My apologies Madame ou monsieur. Recipes are available on other skills. ' +
        'However, for meal ideas, your sous\-chef, myself, is always here for you! Would you like me to suggest something else?'
        )
    },
    // recipe closing

    'AMAZON.HelpIntent': function() {
        this.emit(':ask', 
        'Madame ou monsieur, for meal suggestions, ask, \"what should I cook?\", or simply say, \"next please.\"' 
        );
    },
    // amazon help closing

      'AMAZON.StopIntent': function() {
        this.emit(':tell', 
        'It\'s an honour to serve you. Your dearest sous\-chef is signing off!');  
    },
    // amazon stop closing

    'AMAZON.CancelIntent': function() {
        this.emit(':tell', 
        'It\'s an honour to serve you. Your dearest sous\-chef is signing off!');  
    },
    // amazon cancel closing

    // 'Unhandled': function() {
    //     this.emit('AMAZON.HelpIntent');
    // }
    // unhandled closing

    'Unhandled': function() {
        this.emit(':ask', 
        'Madame ou monsieur, for meal suggestions, ask, \"what should I cook?\", or simply say, \"next please.\"' 
        );
    }
    // unhandled closing




} // chefIntentsHandler closing