# Backend para web shaiya 

Repositorio de backend de WEB Shaiya

##### Endpoints

**/Signup**

Permite generar y guardar un nuevo usuario sin privilegios de administrador.

Tipo de consulta: **POST**

Parametros:

* userID str (usuario para login web/juego)

**/Signin**

Permite hacer login contra la base de datos del juego, al hacer login retorna el nombre de usuario y los puntos para gastar en la tienda web.

Tipo de consulta: **GET**

Parametros: 

* userID str (usuario para login web/juego)

* pw str (contraseña para login web/juego)

