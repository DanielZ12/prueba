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

### NodeJs v18.12.1
