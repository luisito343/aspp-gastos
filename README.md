# 📊 Control de Gastos Personales

¡Bienvenido a **aspp-gastos**! Una aplicación web moderna y funcional diseñada para ayudarte a gestionar tus finanzas personales de manera eficiente. Define un presupuesto, registra tus gastos por categorías y visualiza tu disponibilidad financiera en tiempo real.

Este proyecto ha sido desarrollado utilizando **React 19**, **TypeScript** y **Vite**, enfocándose en el uso de *Context API* y *useReducer* para una gestión de estado robusta.

---

## ✨ Características Principales

* **Gestión de Presupuesto:** Establece un presupuesto inicial y visualiza cuánto has gastado y cuánto tienes disponible.
* **Registro de Gastos:** Añade, edita y elimina gastos de forma sencilla con un formulario intuitivo.
* **Visualización Gráfica:** Incluye un gráfico circular dinámico que muestra el porcentaje del presupuesto utilizado.
* **Filtrado por Categorías:** Clasifica tus gastos en categorías como Ahorro, Comida, Casa, Salud, entre otras.
* **Persistencia de Datos:** Los datos se guardan automáticamente en el `localStorage` para que no se pierdan al recargar la página.
* **Interfaz Adaptable:** Diseño totalmente responsive y estilizado con **Tailwind CSS**.
* **Interacciones Intuitivas:** Soporte para gestos de deslizamiento (swipe) para editar o eliminar elementos de la lista.

---

## 🛠️ Stack Tecnológico

* **Framework:** [React 19](https://react.dev/)
* **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
* **Herramienta de Construcción:** [Vite](https://vitejs.dev/)
* **Estilos:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconos:** [Heroicons](https://heroicons.com/)
* **Componentes UI:** [Headless UI](https://headlessui.com/)
* **Librerías Adicionales:**
    * `react-circular-progressbar`: Para el gráfico de progreso.
    * `react-date-picker`: Selector de fechas amigable.
    * `react-swipeable-list`: Acciones de deslizamiento en listas.
    * `uuid`: Generación de IDs únicos para los gastos.

---

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto de forma local:

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/aspp-gastos.git](https://github.com/tu-usuario/aspp-gastos.git)
    cd aspp-gastos
    ```

2.  **Instala las dependencias:**
    Este proyecto utiliza `pnpm` como gestor de paquetes:
    ```bash
    pnpm install
    ```

3.  **Inicia el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

4.  **Abre tu navegador:**
    Visita `http://localhost:5173` para empezar a usar la aplicación.

---

## 📂 Estructura del Proyecto

* `src/components/`: Componentes de la interfaz como formularios, modales y listados.
* `src/context/`: Configuración del Contexto para la gestión del estado global.
* `src/hooks/`: Hooks personalizados para acceder a la lógica del presupuesto (`useBudget`).
* `src/reducers/`: Lógica centralizada para las acciones y el estado de la aplicación.
* `src/helpers/`: Utilidades para el formateo de moneda y fechas.
* `src/types/`: Definiciones de tipos e interfaces de TypeScript.

---

Desarrollado con ❤️ por Luis Nava.