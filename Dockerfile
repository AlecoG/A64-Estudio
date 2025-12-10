# --- Etapa 1: Builder (Compilación) ---
# Usa una imagen base de Node.js ligera (Alpine) para instalar dependencias y construir la aplicación.
FROM node:20-alpine as builder

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración de dependencias (package.json y package-lock.json/yarn.lock)
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código fuente del proyecto
COPY . .

# Ejecuta el comando de construcción de Vite. 
# Esto genera la carpeta 'dist' con los archivos estáticos listos para desplegar.
# Es crucial que tu script 'build' en package.json sea 'vite build'.
RUN npm run build

# --- Etapa 2: Producción (Servicio) ---
# Usa una imagen de Nginx ultraligera (Alpine) para servir los archivos estáticos generados.
FROM nginx:alpine as production

# Copia los archivos estáticos generados por Vite desde la etapa 'builder' 
# a la ubicación predeterminada de Nginx para servir contenido web.
COPY --from=builder /app/dist /usr/share/nginx/html

# Opcional: Copia una configuración de Nginx personalizada si fuera necesaria (por ejemplo, para manejar rutas SPA)
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

# El puerto 80 es el puerto predeterminado de Nginx.
EXPOSE 80

# El comando CMD predeterminado de Nginx inicia el servidor.
CMD ["nginx", "-g", "daemon off;"]
