# Landing

This is the [NextJS](https://nextjs.org/) application to serve the landing frontend

## Using local installation

Install the dependencies :
```bash
npm install
```

Run the development server :
```bash
npm run dev
```

The app will run on [localhost:3000](http://localhost:3000/)

## Using Docker

Build the docker image:
```bash
docker build -t frontend .
```

Run the front :
```bash
docker run -p 3000:3000 frontend
```

The app will run on [localhost:3000](http://localhost:3000/)
