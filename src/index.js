//const fs = require('fs');
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
//cria um novo cliente
const client = new Client();
//gerando QRcode para iniciar sessao
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
  if (message.body === 'ola') {
    message.reply('Escolha uma opção: \n 1 - Lista de produtos ');
  }
});

client.on('message', (message) => {
  if (message.body === '1') {
    message.reply('Computador \n Celular');
  }
});
let carrinho = '';
let produto = 'mouse';
client.on('message', (message) => {
  if (message.body === 'carrinho') {
    message.reply('Digite qual produto voce deseja adicionar ao carrinho:');
  }
  if (message.body === 'Computador') {
    produto = message.body;
    message.reply(`${produto} no valor de 1400, adicionado ao carrinho`);
    carrinho = produto + carrinho;
  } else if (message.body === 'Celular') {
    produto = message.body;
    message.reply(`${produto} no valor de 1400`);
    carrinho = produto + carrinho;
  }
});

client.on('message', (message) => {
  if (message.body === 'ver carrinho') {
    message.reply(`Seu carrinho \n ${carrinho}`);
  }
  if (message.body === 'sim') {
    const carrinho = Produto + carrinho;
  }
});

client.initialize();
