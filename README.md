## English
# React API Documentation


---

### React API Consumer

An React app that consumes my token based API REST.

---

## Index

1. [Instalation](#instalation)
2. [Config](#config)
3. [Usage](#usage)
4. [Extras](#extras)

---

## Instalation

Instructions for download the repository and install the App dependencies.

In your terminal (VSCode, GIT Bash, Windows, etc.):

- Clone the repository: `git clone <repository_url>`
- Go to the cloned repository folder: `cd your_folder_name`
- Install the dependencies: `npm install`

---

## Configuration

Instructions on how to configure your app.

**Customization**
- In `src/config` folder is a bunch of `.js` file with plenty of strings costumization:
  - `colors.js`: here you can change the app colors;

  - `labels.js`: here you can change the page labels;

  - `placeholders.js`: here you can change the inputs placeholders;

  - `toastMessages.js`: here you can change alert messages strings.

**Database Fetch**
- In `src/services/axios.js`, you may want to insert the URL where your database with the API REST is located.

---

## Usage

Instructions on how to run your application.

- Your database with the API needs to be running at the same port or address as configured before in `src/services/axios.js` (locally or not);

- In your terminal (VSCode, GIT Bash, Windows Terminal, etc.)
  -Run the following command: `npm run start`;
  -A tab in your browser should open automatically.
  -The application runs locally on port `:3000`, so if you are using a local database, do not use the same port. The same goes for running the API locally;

---

## Extras

  - **Technologies Used**
    - JavaScript
    - Node.js
    - React (ReactDOM, Redux, Reducer, Persist, Saga)
    - HTML
    - CSS

- The documentation for how the API works is [HERE](https://github.com/Nemitzz/TOKEN-BASED-API-REST)

- This is a project from the course I am taking on Udemy, with professor Luiz
  Otávio Miranda:
  [Javascript Course](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING)


## Português (BR)
  # Documentação React API


---

### Consumo API React

Um app em React que consome minha API baseada em tokens.

---

## Index

1. [Instalação](#instalação)
2. [Configuração](#configuração)
3. [Uso](#uso)
4. [Extra](#extra)

---

## Instalação

Instruções de como baixar o repositório e instalar suas dependências.

No seu terminal (VSCode, GIT Bash, Windows, etc.):

- Clone o repositório: `git clone <repository_url>`
- Vá para a pasta do repositório clonado: `cd nome_da_sua_pasta`
- Instale as dependências: `npm install`

---

## Configuração

Instruções de como configurar o aplicativo.

**Customização**
- Em `src/config` há alguns arquivos `.js` com várias customizações disponíveis:

  - `colors.js`: aqui você pode mudar as cores do aplicativo;

  - `labels.js`: aqui você pode mudar os rótulos;

  - `placeholders.js`: aqui você pode mudar os placeholders;

  - `toastMessages.js`: aqui você pode mudar as mensagens de alerta.

**Busca no Banco de Dados**
- Em `src/services/axios.js`, você deve inserir a URL onde sua base de dados com sua API está alocada.

---

## Uso

Instruções de como rodar a aplicação.

- Sua base de dados com a API deve estar rodando na mesma porta ou endereço configurado anteriormente `src/services/axios.js` (locally or not);

- No seu terminal (VSCode, GIT Bash, Windows Terminal, etc.)
  -Digite o seguinte comando: `npm run start`;
  -Uma aba no seu navegador deve abrir automaticamente.
  -O aplicativo roda localmente na porta `:3000`, então se estiver usando um banco de dados local, não use a mesma porta. O mesmo vale se estiver usando a API localmente.

---

## Extra

  - **Tecnologias usadas**
    - JavaScript
    - Node.js
    - React (ReactDOM, Redux, Reducer, Persist, Saga)
    - HTML
    - CSS

- A documentação da API e de como ela funciona está [AQUI](https://github.com/Nemitzz/TOKEN-BASED-API-REST)

- Este é um projeto do curso que estou fazendo na Udemy, com o professor Luiz
  Otávio Miranda:
  [Curso Javascript](https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/?couponCode=KEEPLEARNING)
