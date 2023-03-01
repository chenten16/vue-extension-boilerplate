## 🚀 Vue Extension Boilerplate

This is a boilerplate for a Chrome Extension using Vite, Vue, and tailwindcss, designed for MV3.

## ⭐ Features

- Uses Vite as a build tool 🛠️
- Utilizes Vue 3 as a front-end framework 🖥️
- Includes tailwindcss for easy styling 🎨
- Supports webextension-polyfill for browser API compatibility 🌐
- Includes hot reload for automatic updates during development 🔥
- Includes a build script to package the extension 📦

## 🚀 Getting Started

1.  Clone this repository.
2.  Install dependencies using `npm install`.
3.  Run the development server using `npm run start`.
4.  Load the extension in your browser by following these steps:
    - Navigate to chrome://extensions.
    - Turn on Developer mode.
    - Click on "Load unpacked" and select the "dist" folder.
5.  Make changes to the code and see them update automatically in the browser.

## 📜 Scripts

- `start`: Runs the development server using Vite with hot reload enabled.
- `build`: Builds the extension using Vite and outputs the result in the "dist" folder.
- `package`: Builds the extension and packages it into a .crx file using the build.js script.
- `test`: Runs the vitest command.
- `lint`: Lints the code using eslint and the @vue/eslint-config-prettier config.
- `prettier`: Formats the code using Prettier.

## 🚀 Future Support

In the future, we plan to add support for Firefox and Safari browsers. Stay tuned for updates!

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.
