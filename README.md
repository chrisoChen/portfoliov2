## Description
This project is the second iteration of [my first web portfolio](https://github.com/chrisoChen/portfolioV1) that is used to showcase my previous experiences and personal projects.

## Tools
`Next.js` is used to take advantage of the server side rendering capabilities to improve SEO performance. It also uses `MUI` for its built-in components and styling capabilities to bootstrap this project.

## Running the project
A local `.env.local` and `.env.test` is used to store data needed to view my old projects on Github. When cloning the repo, make to make your own environment files with the following values:
```
NEXT_PUBLIC_GITHUB_USERNAME=<YOUR_GITHUB_USERNAME>
REPO_API=https://api.github.com/users/$NEXT_PUBLIC_GITHUB_USERNAME/repos?type="all"&sort="created"
REPO_AUTH_TOKEN=<YOUR_GITHUB_AUTH_TOKEN>
```

## Installing and Set Up
1. Install the dependencies
```
npm install 
```

2. Start the development server
```
npm run dev
```
__Make sure you are using the correct node version. [I recommend using Node Virtual Manager (NVM) to do this](https://github.com/nvm-sh/nvm).__

## Credits and Attribution
This project was inspired from [Brittany Chiang's own portfolio](https://brittanychiang.com/) and therefore credits should be forwarded to her. 
