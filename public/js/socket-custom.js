var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor!!');
});

// on = listen
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// emit =  Send information
socket.emit('enviarMensaje', {
    usuario: 'julio',
    message: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

// Listen information
socket.on('enviarMensaje', function(message) {
    console.log('Servidor: ', message);
});