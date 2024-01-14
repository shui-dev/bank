const fs = require('fs');

const file = 'info.txt';

function drop() {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.error('Erro ao ler arquivo:', err);
            return;
        }

        console.log('Conteúdo original do arquivo:');
        console.log(data);

        const newContent = data.replace('noggers', 'poggers');

        fs.writeFile(file, newContent, 'utf8', (err) => {
            if(err) {
                console.error('Erro ao escrever no arquivo:', err);
                return;
            }
            console.log("Arquivo editado com sucesso!");
        });
    });
}

drop()