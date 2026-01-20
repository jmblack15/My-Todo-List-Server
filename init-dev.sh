#!/bin/bash

export $(grep -v '^#' .env | xargs)

echo "🚀 Levantando contenedores..."
docker-compose up -d

echo "⏳ Esperando a que PostgreSQL ($DB_NAME) esté listo..."

until docker-compose exec db pg_isready -U $DB_USER; do
  sleep 1
done

echo "🔄 Ejecutando migraciones de Prisma..."
docker-compose exec app npx prisma migrate dev

echo "✨ ¡Todo listo! El backend está corriendo con --watch."
echo "----------------------------------------------------"

docker-compose logs -f app