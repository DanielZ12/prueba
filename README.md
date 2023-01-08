# Prueba Tecnica

## Build de la imagen y correr el docker compose

* En el root del proyecto
```
docker build -t api-prueba:1.0.0 .
docker-compose up -d
```

## Ejecutar comandos de migrate y seeders

```
docker exec -it api npx sequelize db:migrate
docker exec -it api npx sequelize db:seed:all
```

## Verificar los endpoins en Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23703870-0bb7162c-5460-41ee-9f2f-f404c9aae5fc?action=collection%2Ffork&collection-url=entityId%3D23703870-0bb7162c-5460-41ee-9f2f-f404c9aae5fc%26entityType%3Dcollection%26workspaceId%3Df8bf7d39-a1aa-422c-86b0-37a104028f6c)


* GET All reservations
```
localhost:3030/reservation = Podremos visualizar todas las reservas en la base de datos
```

* POST Create reservation
```
localhost:3030/reservation = Podremos crear una reserva en la base de datos. Ejemplo:
{
    "room": "1",
    "countDays": "8"   
}
En este caso solo se creara la reserva, ya que la facturacion se creara en el siguiente endpoin
```

* PUT Update billing
```
localhost:3030/reservation/1 = Podremos cambiar el estado de la facturacion de pendiente a pagado agregandole un id valido en el params y y cambiando el billingId. Ejemplo:
{
    "billingId": 1
}
```
* PUT Remove reservation
```
localhost:3030/reservation/delete/1 = Podremos cambiar el estado de la facturacion a eliminado agregandole el id de en el params
```
* GET All billing
```
localhost:3030/billing = Podremos todas las facturaciones de la base de datos
```
* POST All billing
```
localhost:3030/billing = Podremos crear facturaciones. Ejemplo:
{
    "fullName": "alan",
    "identification": 41009319,
    "methodPaid": "efectivo",
    "totalPaid": "1000"
}
```


