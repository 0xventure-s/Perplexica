# Perplexica - Motor de Búsqueda con IA

Este repositorio contiene una implementación personalizada de Perplexica, un motor de búsqueda potenciado por IA.

## Requisitos

- Node.js (versión 18 o superior)
- Docker (para SearXNG)
- Acceso a API de modelos de IA (opcional)

## Instalación

### Método 1: Usando Docker (recomendado)

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd perplexica
   ```

2. Configura el archivo `config.toml`:
   - Renombra `sample.config.toml` a `config.toml` (si no existe ya)
   - Configura las claves de API necesarias
   - Asegúrate de que la URL de SearXNG esté configurada correctamente

3. Inicia los contenedores:
   ```bash
   docker compose up -d
   ```

4. Accede a Perplexica en: http://localhost:3000

### Método 2: Instalación Manual

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd perplexica
   ```

2. Instala SearXNG:
   ```bash
   cd searxng-docker
   docker compose up -d
   cd ..
   ```

3. Configura el archivo `config.toml`:
   - Asegúrate de que la URL de SearXNG sea correcta (http://localhost:8081)

4. Instala dependencias y construye la aplicación:
   ```bash
   npm install
   npm run build
   ```

5. Inicia la aplicación:
   ```bash
   node .next/standalone/server.js
   ```

6. Accede a Perplexica en: http://localhost:3000

## Despliegue en Producción

Para desplegar en un entorno de producción:

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Inicia el servidor usando:
   ```bash
   node .next/standalone/server.js
   ```

3. Para mantener el servicio funcionando constantemente, usa un gestor de procesos como PM2:
   ```bash
   npm install -g pm2
   pm2 start .next/standalone/server.js --name perplexica
   pm2 save
   pm2 startup
   ```

4. Configura un proxy inverso (Nginx) para servir la aplicación con HTTPS.

## Configuración de SearXNG

El archivo `docker-compose.yml` en el directorio `searxng-docker` contiene la configuración necesaria para ejecutar SearXNG.

## Solución de Problemas

- Si tienes problemas con los puertos, verifica que no estén siendo usados por otras aplicaciones.
- Si SearXNG no funciona, verifica que Docker esté en ejecución.
- Para problemas con la conexión a la API de IA, verifica tus claves en `config.toml`.

## Importante

No compartas tus claves de API en repositorios públicos. 