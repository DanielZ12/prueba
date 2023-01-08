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

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/23703870-0bb7162c-5460-41ee-9f2f-f404c9aae5fc?action=collection%2Ffork&collection-url=entityId%3D23703870-0bb7162c-5460-41ee-9f2f-f404c9aae5fc%26entityType%3Dcollection%26workspaceId%3Df8bf7d39-a1aa-422c-86b0-37a104028f6c)
