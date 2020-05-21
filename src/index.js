const fs = require('fs');
//importação
const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');

//carregando arquivo de sessao
//const SESSION_FILE_PATH = './config/session.json';

/*let sessionData;
if (fs.existsSync(SESSION_FILE_PATH)) {
  sessionData = require(SESSION_FILE_PATH);
}
*/
const client = new Client();
client.on('qr', (qr) => {
  qrcode.generate(qr, { small: false });
});

/*client.on('authenticated', (session) => {
  sessionData = session;
  fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    if (err) {
      console.error(err);
    }
  });
});
*/
client.on('ready', () => {
  console.log('Client is ready');
});

client.on('message', (message) => {
  console.log(message.body);
});

client.on('message', (message) => {
  if (message.body === 'ta bom') {
    message.reply(
      'eu te amo, com todas as minhas forças você é a coisa mais especial da minha vida, muito obg por ser você, infelizmente nao posso dar tudo que voce merece, mais te prometo dar tudo que tenho'
    );
  }
});

client.initialize();
