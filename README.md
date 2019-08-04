BlogApp is created for education purpose with MERN(Mongo,Express, React and Node). This app provides following features:
  
  - API
    - Secured Login and Signup and validate session.
    - Creating a new blog
    - Reading a Blog with Id
    - Adding comments to blog.
    - Bootstrap for creating user and blogs when initializing first time for FE
    
  - FE
      - Basic Layout with React-Semantic-UI
      - Signup/Login integrated with API
      - Listing of blogs
      - Detail page for Blog
      - Comment addition feature
      - Redux store using thunk action setup for CRUD operations



## With Docker

- Docker(https://docs.docker.com/install/)
- cd <project>
- docker-compose build
- docker-compose up


## Without Docker(prerequisite)

- Node, npm
- MongoDB


## Project Setup

- for MongoDB: 
  - https://docs.mongodb.com/v3.2/administration/install-community/

- git clone https://github.com/akash-sethi/blogger-react.git
- cd blogger-react
- yarn install && yarn start

- for server: 
    - open a new terminal
    - cd blogger-react/server
    - npm i && npm start
