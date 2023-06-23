# Ecommerce Project

The ecommerce project is a JavaScript-based application developed using React and Redux.This project uses JavaScript, uses Redux for state management, React Router for routing, and hook-form. 

## Server Simulation with Mockoon

The ecommerce application utilizes Mockoon to simulate server-side behavior by mocking REST API endpoints.

## Getting Started

1. Install mockoon-cli

```sh
npm install -g @mockoon/cli
```

2. Clone the repository:

```sh
git clone https://github.com/somayehbd/ecommerce.git
```

3. Navigate into the project directory:

```sh
cd ecommerce
```

4. Install the dependencies:

```sh
npm install
```
4. Start mockoon server

```sh
mockoon-cli start -p 3100 -d https://raw.githubusercontent.com/somayehbd/ecommerce/master/configs/server.json
```

5. Start ecommerce application

```sh
npm start
```