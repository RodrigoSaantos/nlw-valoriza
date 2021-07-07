<h2 align="center">
    <img alt="Logo" title="#logo" src="public/images/logo.svg" width="400"/>
</h2>

<h1 align="center">
    NLW - Valoriza | NLW#6
</h1>

<div align="center">

  <a href="">
    <img src="https://img.shields.io/github/languages/count/RodrigoSaantos/ignews.svg?color=835afd" alt="languages" >
  </a>

  <a href="">
    <img src="https://img.shields.io/github/languages/top/RodrigoSaantos/ignews.svg?color=835afd" alt="languagesTop" >
  </a>

  <a href="">
    <img src="https://img.shields.io/github/repo-size/RodrigoSaantos/ignews.svg?color=835afd" alt="repo-size" >
  </a>

  <a href="">
    <img src="https://img.shields.io/github/last-commit/RodrigoSaantos/ignews.svg?color=835afd" alt="last-commit" >
  </a>

</div>

<p align="center"> Application developed in the sixth edition of Rocketseat Next Level Week 💻🚀 </p>

<p align="center">
 <a href="#about">About</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#usage">Usage</a> •
 <a href="#contribution">Contribution</a> •
 <a href="#author">Author</a> •
 <a href="#license">License</a>
</p>

<h1 align="center">
  <div style="display: flex; flex-direction: row;">
    <img width="600" style="border-radius: 10px" height="auto" alt="home" title="Home" src="public/images/nlw-valoriza.png" />

  <div>
</h1>

<h4 align="center">
	🤗 NLW - Valoriza | NLW#6 🗣 compliments... 😘
</h4>

<h2 id="about" > 🎯 About </h2>

Valoriza is a platform to promote recognition among teammates.

<h2 id="technologies"> 🛠 Technologies </h2>

The following tools were used in the construction of the project:

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com) or Npm
- [VSCode](https://code.visualstudio.com)
- [Git Bash](https://gitforwindows.org/)
- [Express](https://expressjs.com/pt-br/)
- [JSONWebToken](https://github.com/auth0/node-jsonwebtoken#readme)
- [TypeORM](https://typeorm.io/)

<h2 id="usage" > 👷 Usage </h2>

Required! Install git, node and yarn (or npm).

```bash
# Clone Repository
$ git clone https://github.com/RodrigoSaantos/nlw-valoriza.git

# Go to server folder
$ cd nlw-valoriza

# Install Dependencies
$ yarn
# or
$ npm install

# Run Aplication
$ yarn start
# or
$ npm run start

# Access localhost
http://localhost:3000
```

## Routes ➡️ <a name="routes"></a>
* __POST__
    * `/tags` -> Create new tag
    * `/users` -> Create new user
    * `/login` -> User authenticated
    * `/compliments` -> Create compliments (admin)
* __GET__
    * `/tags` -> List all tags
    * `/users` -> List all users
    * `/users/compliments/send` -> List send compliments
    * `/users/compliments/receive` -> List receive compliments

## Rules <a name="rules"></a>

- **Create User**

  - [x] It is not allowed to register more than one user with the same email

  - [x] It is not allowed to register user without e-mail

- **Create TAG**

  - [x] It is not allowed to register an unnamed tag

  - [x] It is not allowed to register more than one tag with the same name

  - [x] Registration by users who are not administrators is not allowed

- **Create Compliments**
 
  - [x] Users are not allowed to register a compliment for themselves

  - [x] It is not allowed to register compliments for invalid users

  - [x] The user must be authenticated in the application

## Requests
* `POST /session`

Request body:
```json
{
  "email": "contato.rodrigosaantos@gmail.com",
  "password": "12345678"
}
```

* `POST /users`

Request body:
```json
{
  "name": "Rodrigo",
  "email": "contato.rodrigosaantos@gmail.com",
  "password": "12345678",
  "admin": true
}
```

* `POST /tags`

Request body:
```json
{
  "name": "Leader",
}
```

* `POST /compliment`

Request body:
```json
{
  "tag_id": "sa78a97s-d8a0-8c783-382g-382sk92ja873",
  "receiver_id": "sui78e7sd-a87l-107l-2znk-19so7uj4hs73",
  "message": "You are great leader"
}
```

<h2 id="contribution"> 🤝 Contribution </h2>

This project is for study purposes too. All kinds of contributions are very welcome and appreciated!

- Fork this repository;
- Create a branch with your feature: `git checkout -b my-feature`;
- Commit your changes: `git commit -m 'feat: My new feature'`;
- Push to your branch: `git push origin my-feature`.

<h2 id="author"> 💻 Author </h2>

<img style="border-radius: 50%;" src="https://github.com/RodrigoSaantos.png" width="100px;" alt="Rodrigo Santos"/>

By Rodrigo Santos 👋🏽 Find me:

[![Linkedin Badge](https://img.shields.io/badge/-RodrigoSantos-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rodrigo-dos-santos-silva-637225156/)](https://www.linkedin.com/in/rodrigosaantos/)
|
[![Gmail Badge](https://img.shields.io/badge/-contato.rodrigosaantos@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:contato.rodrigosaantos@gmail.com)](mailto:contato.rodrigosaantos@gmail.com)


<h2 id="license"> 📝 License </h2>

This project is under the MIT license.
