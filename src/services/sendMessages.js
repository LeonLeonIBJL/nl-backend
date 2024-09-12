const client = require('../config/twilio');

const sendMessage = async (body) => {

    try {

        const message = `Olá ${body.name}, eu sou o ${body.user}, e fico muito feliz que você se juntou a nós.
        \nAgora você precisa entrar no nosso grupo pra ficar por dentro de tudo que estiver acontecendo.
        \nEvite deixar esse grupo no silencioso, só assim não vai perder nada. Fique tranquilo que não temos o hábito de enviar SPAM: https://chat.whatsapp.com/BBGjc6sSVPr5AW1dLZcK2C`;

        const response = await client.messages.create({
            body: message,
            from: 'whatsapp:+14155238886', // Seu número do Twilio
            to: `whatsapp:+55${body.phone}`
        });
    
        return response;

    } catch (error) {
        let e = {
            code: -1,
            message: 'Erro ao enviar mensagens:', error
        };
    }

};
  
module.exports = {
    sendMessage
};