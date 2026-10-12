# BeautyBook

## 1. Descripción del proyecto

**BeautyBook** es un sistema digital orientado a facilitar la búsqueda de servicios de belleza, la consulta de profesionales y la reserva de citas en horarios disponibles.

El proyecto se desarrolla como parte de la asignatura Ingeniería de Software I, aplicando levantamiento de requisitos, historias de usuario, modelado UML, gestión de tareas y documentación técnica.

**Repositorio de seguimiento:** `yoliberpichardo/mvp_test_frontend`

## 2. Objetivo

Diseñar una plataforma que permita a los clientes consultar servicios y profesionales, seleccionar horarios disponibles y realizar reservas, mientras los profesionales administran su disponibilidad.

## 3. Problema que resuelve

La coordinación manual de citas puede provocar dificultades para consultar horarios, organizar reservas y evitar conflictos de disponibilidad.

BeautyBook propone centralizar estas operaciones en un sistema digital accesible y organizado.

## 4. Funcionalidades principales

Las siguientes funcionalidades corresponden a los requisitos definidos para BeautyBook:

| Código | Funcionalidad | Estado |
|---|---|---|
| RF-01 | Registro e inicio de sesión | En seguimiento |
| RF-02 | Consulta de catálogo de servicios y precios | En seguimiento |
| RF-03 | Reserva de citas | En seguimiento |
| RF-04 | Consulta de perfiles de profesionales | En revisión |
| RF-05 | Gestión de horarios y disponibilidad | Pendiente |

Los estados corresponden al seguimiento académico en GitHub Projects y no representan necesariamente funcionalidades terminadas en el código.

## 5. Tecnologías utilizadas

El repositorio actual contiene una aplicación frontend desarrollada con:

- Angular 19
- TypeScript 5.7
- Angular Material
- Angular Router
- Angular Forms
- RxJS
- HTML y CSS
- Jasmine y Karma para pruebas

Se utilizan además:

- Git para control de versiones.
- GitHub para almacenamiento y seguimiento.
- GitHub Issues para documentar requisitos y tareas.
- GitHub Projects para organizar el avance.
- Visual Paradigm Online para el modelado UML.

## 6. Arquitectura del sistema

### Frontend

La aplicación frontend utiliza Angular y organiza sus archivos principalmente dentro de `src/app/`.

La estructura identificada contiene componentes y archivos relacionados con:

- Autenticación y pantalla de inicio de sesión.
- Servicios y protección de rutas.
- Interfaces de usuarios y productos.
- Listado y formulario de productos.
- Navegación compartida.
- Configuración de rutas.

Estos componentes pertenecen a la base técnica existente y no equivalen por sí solos a la implementación completa de BeautyBook.

### Backend

Para BeautyBook se propone una arquitectura cliente-servidor, con un backend responsable de procesar las operaciones del sistema.

Sus responsabilidades previstas incluyen:

- Autenticación y autorización.
- Gestión de clientes y profesionales.
- Administración de servicios.
- Consulta y actualización de disponibilidad.
- Validación y registro de reservas.
- Acceso y persistencia de datos.

**Estado actual:** no se ha identificado una implementación de backend dentro del repositorio revisado.

### Comunicación entre frontend y backend

La comunicación prevista se realizará mediante solicitudes HTTP a una API.

El frontend enviará las solicitudes del usuario y mostrará las respuestas recibidas. El backend validará las reglas de negocio, consultará los datos correspondientes y devolverá el resultado de cada operación.

En el flujo de reserva, el backend deberá comprobar que el horario seleccionado continúe disponible antes de registrar la cita.

## 7. Organización del repositorio

```text
mvp_test_frontend/
├── .vscode/
├── public/
├── src/
│   ├── app/
│   │   ├── auth/
│   │   ├── interceptors/
│   │   ├── interfaces/
│   │   ├── products/
│   │   └── shared/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── README.md
```

## 8. Ejecución del frontend

Requisitos: Node.js y npm compatibles con Angular 19.

Instalar dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm start
```

Compilar:

```bash
npm run build
```

Ejecutar pruebas:

```bash
npm test
```

## 9. Registro de avances y ajustes

| N.º | Avance o ajuste | Evidencia |
|---|---|---|
| 1 | Definición del problema y objetivo del sistema | Documentación de BeautyBook |
| 2 | Elaboración de historias de usuario y requisitos funcionales | GitHub Issues |
| 3 | Organización de tareas, prioridades y estados | GitHub Projects |
| 4 | Elaboración de modelos UML del sistema | Visual Paradigm Online |
| 5 | Consolidación de la documentación técnica y arquitectura propuesta | README.md |

Este registro describe avances del trabajo académico. No implica que todas las funcionalidades estén programadas.

## 10. Riesgos y tareas pendientes

- Completar la implementación de las funcionalidades específicas de BeautyBook.
- Definir e implementar el backend y la persistencia de datos.
- Validar las reglas de disponibilidad y los conflictos entre citas.
- Verificar la integración entre frontend y backend.
- Ejecutar pruebas funcionales y actualizar las evidencias de seguimiento.

## 11. Estado actual del proyecto

BeautyBook cuenta con requisitos funcionales documentados, historias de usuario, seguimiento en GitHub Projects y trabajo de modelado UML.

El repositorio contiene una base frontend Angular con módulos de autenticación y gestión de productos. La implementación completa de las funcionalidades específicas de BeautyBook y su backend permanecen pendientes de verificación o desarrollo.

## 12. Próximos pasos

1. Revisar y priorizar los Issues pendientes.
2. Completar el diseño de los módulos específicos de BeautyBook.
3. Definir los contratos de comunicación con el backend.
4. Implementar y validar el flujo de reservas.
5. Ejecutar pruebas y actualizar el tablero con el avance real.

## 13. Control de versiones

**Versión documental inicial:** 0.1.0

Esta versión reúne la documentación del alcance, los requisitos, la arquitectura propuesta y el seguimiento del proyecto.

No representa una versión funcional completa del sistema.

---

**Proyecto académico:** BeautyBook  
**Asignatura:** Ingeniería de Software I  
**Herramientas de seguimiento:** GitHub Projects, GitHub Issues y Visual Paradigm Online
