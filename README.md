* Module
  * dto
  * interfaces
  * schemas
  * controller
  * service


Start server:
* npm run start:dev
* yarn start:dev


Listen port **8081**


Endpoints:

* /users
* 

Para la coneccion con MongoDB se usaron las siguientes dos librerias:

* mongoose
* @nestjs/mongoose

CONECCION A MONGO ATLAS
mongodb+srv://jcjohan:password2707@tucanisport.rdetp.mongodb.net/admin?authSource=admin&replicaSet=atlas-klrosy-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true


USERS

* Get All users
  * http://localhost:8081/users
* Create user
  * http://localhost:8081/users
  ```
  {
    "email": "admin@gmail.com",
    "password": "123456789"
  }
   ```
* Login
  * http://localhost:8081/users/login
  ```
  {
    "email": "admin@gmail.com",
    "password": "123456789"
  }
   ```
