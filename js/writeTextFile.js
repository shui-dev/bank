const fs = require('fs');

const file = 'info.txt';
let content = 'pog'
const contentFile = content;

fs.writeFile(file, contentFile, 'utf8', (err) => {
    if(err) {
        console.error('Erro ao escrever no arquivo:', err);
        return;
    }
    console.log('Arquivo escrito com sucesso!');
})