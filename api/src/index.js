const app = require('./app')

app.listen(app.get('port'));
console.log('Server corriendo en ', app.get('port'));