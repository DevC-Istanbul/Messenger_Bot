require('dotenv').config()

const login = require("facebook-chat-api");
const email = process.env.FACEBOOK_EMAIL_ADRESS;
const password = process.env.FACEBOOK_PASSWORD;

login({email:email, password:password}, (err, api) => {
    if(err) return console.error(err);
 
    api.listen((err, message) => {
        if (message && message.body === 'merhaba') {
            api.sendMessage({
                body: 'Merhaba!'  
            }, message.threadID);
        }
        // Buraya eklemek istediğiniz mesaj varsa yukarıya benzer bir yapıda oluşturabilirsiniz.
    });
});