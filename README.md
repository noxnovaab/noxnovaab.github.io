# Nox Nova
[![Laravel Forge Site Deployment Status](https://img.shields.io/endpoint?url=https%3A%2F%2Fforge.laravel.com%2Fsite-badges%2F94bc6f32-4536-4514-9d24-587214f54996%3Fdate%3D1%26label%3D1&style=flat-square)](https://forge.laravel.com/servers/561652/sites/2499291)

Most of the content is found in ```/src/views/App.vue```. If any change is made run build and republish ```/dist``` folder. 

```/public``` is a special folder that gets copied to ```/dist``` during build. Place files here that should be included in the public build since everything in ```/dist``` gets removed before creating a new build.

Use the .env file to inject some texts that are used for example in ```<meta>```-tags. See .env-example for some defaults.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Getting started

### Prerequisites

- **Node.js** (>=18.0.0 recommended)

### Installation

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
