### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Your app is ready to be deployed!


### `npm run deploy`
Builds the app for production and deployed in `https://Marieswaran25.github.io/Portfolio`


# count visitors api
>`https://api.countapi.xyz/set/marieswaran.in/984b31b5-b2ff-4f89-a9db-9d0abaabcdcd?value=0` to reset count

# docker workflow
>`dockerize our app into an image by a docker file saying cmnds and run it on any docker installed machines,everytime you runs an image , it process on new container`

# Build our app image
>`docker build . -t portfolio`

# Run our docker image
>`docker run portfolio`

# docker list in our machine
>`docker ls`

# check running docker images
>`docker ps`

# see things in container
>`docker exec -it  9fdf708bbd0b sh`  
<!-- everytime we runs an image ,image runs on new container id -->
