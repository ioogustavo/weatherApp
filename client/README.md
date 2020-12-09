                #WeatherAPP

App para consultar el clima de ciudades en Argentina.
Primero instale las dependencias correspondientes con npm install en la carpeta /api y /client. Una vez hecho ejecutelo, haciendo npm start primero en /api y luego en /client.

###BackEnd
En backend utilicé la db de firebase donde preparé un JSON con los datos de ciudades así se pueden consultar online. Inicia en index.js donde se establece el puerto y se configura en app.js.
Van a encontrar algunas keys de firebase por ejemplo tanto en back como en front, estas se deberian ocultar en un .env pero ya que lo van a probar posiblemente desde git lo dejo público. Luego las haré privadas.

###FrontEnd
Utilicé Bootstrap para el control del css y html en el proyecto, ademas de las dependencias necesarias de react usé simple-react-google-maps para que me ayude a renderizar el mapa.
Tal vez vea que solo carga Mendoza pero no los otros mapas, esto sucede porque pide que yo cargue una tarjeta de crédito en la consola de google para poder usarla y como no me aceptó la que tengo, no podrá visualizar las demas ciudades.
