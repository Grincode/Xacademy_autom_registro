# 🧪 Automatización de Registro con Cypress

Este proyecto contiene pruebas automatizadas con **Cypress** para validar el flujo de registro de usuarios en la página:  
👉 [https://ticketazo.com.ar/auth/registerUser](https://ticketazo.com.ar/auth/registerUser)

## 📂 Estructura del proyecto

```
cypress/
  ├── e2e/
  │   └── register.cy.js   # Casos de prueba del registro
  ├── fixtures/            # Datos de prueba (ej: usuarios válidos e inválidos)
  ├── support/             # Comandos reutilizables y configuración
README.md
package.json

```

Se incluyen **casos positivos** (registro exitoso) y **casos negativos** (validación de errores y restricciones del formulario).

---

## 🚀 Tecnologías utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testing E2E
- [Node.js](https://nodejs.org/) - Entorno de ejecución

---

## 📦 Requisitos previos

Antes de comenzar, asegurate de tener instalado:

- Node.js (v16 o superior)
- npm o yarn

---

## ⚙️ Instalación

Cloná el repositorio y luego instalá las dependencias:

```bash
git clone https://github.com/tu-usuario/cypress-register-automation.git
cd cypress-register-automation
npm install
```

## ▶️ Ejecución de pruebas

# Modo gráfico

```
npx cypress open
```

# Terminal

```
npx cypress run
```
