const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Bievenido a esta aplicación'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Listen client
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', {
            data
        });

        // if (message.usuario) {

        //     callback({
        //         resp: 'Todo salio bien!!'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio maaaaaaaaaaaaal!!'
        //     });
        // }

    });
});