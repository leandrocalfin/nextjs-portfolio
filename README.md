# Portfolio Personal

Este proyecto es mi portfolio personal, desarrollado con **Next.js** y **Tailwind CSS**. El objetivo del sitio es presentar mi perfil, mis conocimientos y los proyectos en los que trabajo, dentro de una interfaz moderna, responsive y con soporte para modo claro/oscuro e idioma español/inglés.

## Características

* Diseño responsive para escritorio y dispositivos móviles.
* Secciones de **Inicio**, **Sobre mí**, **Proyectos** y **Contacto**.
* Cambio de idioma **Español / Inglés**.
* Modo **claro / oscuro**.
* Formulario de contacto funcional mediante **Resend**.
* Descarga de CV en formato PDF.

## Tecnologías utilizadas

* **Next.js**
* **React**
* **Tailwind CSS**
* **Framer Motion**
* **React Icons**
* **Next Themes**
* **Resend**

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/leandrocalfin/nextjs-portfolio.git
   ```

2. Ingresar a la carpeta del proyecto:

   ```bash
   cd TU-REPO
   ```

3. Instalar las dependencias:

   ```bash
   npm install
   ```

## Ejecución en entorno local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abrir en el navegador:

```bash
http://localhost:3000
```

## Variables de entorno

Para que el formulario de contacto funcione correctamente, es necesario crear un archivo `.env.local` en la raíz del proyecto y agregar la clave de Resend:

```env
RESEND_API_KEY=tu_api_key
```

> Importante: el archivo `.env.local` no debe subirse al repositorio.

## Estructura general del proyecto

```bash
app/
components/
public/
```

* **app/**: páginas y estructura principal del proyecto.
* **components/**: componentes reutilizables como Navbar, Hero, About, Projects y Contact.
* **public/**: imágenes, íconos y CV descargable.

## Deploy

Este proyecto puede desplegarse fácilmente en **Vercel**.

Una vez subido el repositorio a GitHub:

1. Importar el proyecto en Vercel.
2. Configurar la variable de entorno `RESEND_API_KEY`.
3. Ejecutar el deploy.

## Autor

Desarrollado por **Leandro Calfin**.
