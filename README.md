<div align="center">

  <img src="https://raw.githubusercontent.com/melihaltin/nft-infinity/ee0f773e65cb08cd9dc39939c62db07e467bfe75/frontend/public/logos/logo.svg?token=A73Y3ZGFE7P6CIASMJZ4XATEVZ7KQ" alt="logo" width="250" height="auto" />
  
# NFT-Infinity
  
  <p>
Full Stack DApp with Next.js 13 Tailwind-css, Hardhat , Metamask, Alchemy, Pinata IPFS
  </p>
  
<!-- Badges -->

</div>

<br />

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

#### General View

![General View](https://github.com/melihaltin/nft-infinity/blob/main/readme/captures/view.gif?raw=true)

#### Connect Wallet

![Connect Wallet](https://github.com/melihaltin/nft-infinity/blob/main/readme/captures/connectwallet.gif?raw=true)

#### Upload NFT

![Upload NFT](https://github.com/melihaltin/nft-infinity/blob/main/readme/captures/upload.gif?raw=true)

#### Buy the NFT

![Buy the NFT](https://github.com/melihaltin/nft-infinity/blob/main/readme/captures/buyNFT.gif?raw=true)

<!-- <div align="center">
<a href="https://airbnb-sclone.vercel.app"><img  src='./demo/ezgif-4-27f1be5f56.gif' alt='image'/></a>
</div> -->

<br />

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
  <li><a href="https://www.alchemy.com/">Alchemy</a></li>
  <li><a href="https://app.pinata.cloud/">Pinata</a></li>
  </ul>
</details>

<br />

<table>
    <tr>
        <td>
<a href="#"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" alt="" width="30" height="30" /></a>
        </td>
                <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/183096870-fdf58e59-d78c-44f4-bd1c-f9033c16d907.png" alt="Google" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/179383376-874f547c-4e6f-4826-850e-706b009e7e2b.png" alt="" width="30" height="30" /></a>
        </td>
                              <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/181918664-569af962-756c-438c-b350-294f042e6f61.png" alt="" width="30" height="30" /></a>
        </td>
                        <td>
<a href="#"><img src="https://user-images.githubusercontent.com/99184393/180462270-ea4a249c-627c-4479-9431-5c3fd25454c4.png" alt="" width="30" height="30" /></a>
        </td>
                                <td>
<a href="#"><img src="https://raw.githubusercontent.com/melihaltin/nft-infinity/ee0f773e65cb08cd9dc39939c62db07e467bfe75/readme/images/Pinnie.svg?token=A73Y3ZHX3SY7MVY7PJ5NRILEVZ62Y" alt="" width="30"height="30"/></a>
        </td>
                                      <td>
<a href="#"><img src="pinata" alt="" width="30"height="30"/></a>
        </td>
     
       
   </tr>
</table>

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>
- Sign up for a Alchemy account <a href='https://www.alchemy.com/'>HERE</a>
- Get Pinata APi Key <a href='https://app.pinata.cloud/developers/api-keys'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ALCHEMY_API_KEY`

`PRIVATE_KEY`

`PINATA_PRIVATE_KEY`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### :gear: Installation

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=next.js&logoColor=61DAFB)

Install my-project with npm

```
npx create-next-app@latest my-project --typescript --eslint
```

```
cd my-project
```

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<!-- Run Locally -->

### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/melihaltin/nft-infinity.git
```

change directory

```bash
  cd nft-infinity
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<hr />

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<hr />

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :handshake: Contact

Melih - [Gmail](melihaltin00@gmail.com)(melihaltin00@gmail.com)

Project Link: [https://github.com/melihaltin/nft-infinity.git](https://github.com/melihaltin/nft-infinity.git)

<br />

<br />

<div align="center">Don't forget to leave a star ⭐️</div>
