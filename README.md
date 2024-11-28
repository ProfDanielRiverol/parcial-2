# Consigna para el Examen Parcial II Programación 3

**Objetivo:** Refactorizar una aplicación monolítica en **capas** siguiendo buenas prácticas de arquitectura backend. La aplicación utiliza **Node.js**, **Express**, **MySQL** y **Sequelize**. Inicialmente, toda la lógica se encuentra en un único archivo funcional (`app.js`).

#### **Instrucciones**

1. **Archivo inicial (`app.js`)**  
   Se les proporciona un archivo funcional (`app.js`) que contiene:
   - La configuración del servidor.
   - La conexión a la base de datos MySQL usando Sequelize.
   - Modelos, rutas y controladores implementados directamente en el mismo archivo.
   - Dependencias mínimas ya instaladas en el proyecto.

2. **Tareas principales** (A completar en **2 horas máximo**):
   a. **Refactorización en capas**  
   - Separar la lógica del archivo `app.js` en las siguientes capas básicas:
     - **Configuración** (ej. conexión a la base de datos, puerto).
     - **Rutas**: Crear un archivo de rutas por recurso.
     - **Controladores**: Mover la lógica de las rutas a controladores específicos.
     - **Modelos**: Crear una carpeta con los modelos definidos en Sequelize.

   b. **Reorganización del proyecto**  
   Crear la siguiente estructura mínima:
   ```
   /src
     ├── config/        
     ├── models/        
     ├── routes/        
     ├── controllers/   
     └── app.js         
   ```

   c. **Instalación de dependencias faltantes**  
   - Verificar y añadir dependencias necesarias (ej. `dotenv` para variables de entorno si no está instalado).

3. **Condiciones para aprobar**  
   - El servidor debe funcionar correctamente después de la refactorización.
   - La conexión con MySQL y las operaciones CRUD del modelo deben seguir funcionando.
   - Cada archivo debe contener solo la lógica correspondiente a su capa.
   - Estructura del proyecto organizada de acuerdo con las indicaciones.

### Entrega
- Se debe entregar el proyecto refactorizado en github.
- Es obligatorio el uso de variables de entorno 

**Tiempo estimado:** **2 horas máximo.**
