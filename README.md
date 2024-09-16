<div align="center">
  <img src="https://github.com/user-attachments/assets/f4071c70-da66-4ad9-9a1b-b09af7afbf35" alt="Logo">
</div>

# 🔰 Landify

- A template which can used for your next SaaS product, its completely free, have already configured basic backend, fully written in typescript. Make your landing page a little cool.

- For this project I only deployed [frontend](https://landify-sepia.vercel.app/) on `vercel` under free tier, but many services such as `EC2`, `render.com` can be used to node backend.

## 📚 Tech Stack

- **Client:** Next JS, TailwindCSS
- **Server:** Node, Express
- **Datebase:** Mongo DB

## 📦 API Reference, Routes & Misc

| Route                            | Type   | Protected | Parameter                                                        | Description                          |
| :------------------------------- | :----- | :-------- | :--------------------------------------------------------------- | :----------------------------------- |
| `/api/user/newsletter-user`      | `POST` | No        | `email`                                                          | To store newsletter user in database |
| `/api/services/send-email/admin` | `POST` | Yes       | `fromName`, `toName`, `toEmail`, `subject`, `message` (all body) | Used to send mails                   |
| `/api/services/send-email/test`  | `POST` | Yes       | `toName`, `toEmail`, `subject`, `message` (all body)             | Used to send mails                   |

- `Vercel Analytics` is can be enabled for user monitoring.

## 🔩 Environment Variables

This project requirement .env configuration in `Backend` as well in `Frontend` folder.

### Backend

| Varibale             | Description                                                          |
| :------------------- | :------------------------------------------------------------------- |
| `MONGO_PROD_URI`     | Production Database URI                                              |
| `MONGO_TEST_URI`     | Test Database URI                                                    |
| `PORT`               | Port number for backend (5000)                                       |
| `ADMIN_AUTH_KEY`     | Admin Auth Key (Generated by jwt) - used for inner routes protection |
| `ADMIN_HASHED_KEY`   | Admin Hashed Key (Doubly hashed)                                     |
| `ADMIN_EMAIL`        | Admin Email                                                          |
| `ADMIN_APP_PASSWORD` | Admin App Password                                                   |
| `TEST_EMAIL`         | Test Email                                                           |
| `TEST_APP_PASSWORD`  | Test App Password                                                    |
| `DEPLOYED_URL`       | Deployed URL                                                         |
| `ENV`                | Environment (dev / production)                                       |

### Frontend

| Varibale      | Description                        |
| :------------ | :--------------------------------- |
| `DOMAIN`      | Site domain (include protocol)     |
| `SITE_NAME`   | Site name (just name, eg. landify) |
| `BACKEND_URI` | Backend URI (include protocol)     |

## 🔨 Setting Up

- `This project doesn't requires backend, the backend is only given only to store the newsletter user and send emails`

Follow the following instruction to setup the project and run locally

- Set the environment variables in both `Backend` and `Frontend` folder.
- Make sure, the environemental variables are set.
- Open two seperate terminals and run `npm install` and then `npm run dev` in both terminals, one for backend and one for frontend. `package.json` is configured in a way it will start the dev mode by running `npm run dev`.
- Hurray! your app will be started in development mode.

## Few Notes

- The backend is only used to store the newsletter user and send emails.
- To add new blog just add files according to the format in `Frontend/public/blog` folder. The blog will be automatically added to the website.
- The beackend in turned off in the frontend, so the newsletter will not work in the frontend, you need to uncomment the onsubmit function in the form (in Footer.tsx - Frontend)

## Deployment

- The frontend can be deployed on `vercel`, `netlify`, `github pages`, `render.com` etc.
- The backend can be deployed on `EC2`, `render.com`, `heroku`, `netlify`, `vercel` etc.

1. To deploy the frontend, run the following command in the `Frontend` folder:

- `configure the .env file`
- `npm install`
- `npm run build`

2. To deploy the backend, run the following command in the `Backend` folder:

- `configure the .env file`
- `npm run build`
- `npm deplloy`

## ⚡ Features

- Very easy to customize and deploy just be changing variables values
- Static blog section, which doesn't require backend setup.

## 📁 File Structure :

```
.
├── Backend
│   │── config
│   │   └── db.ts
│   │── lib
│   │   └── definitions.ts
│   │── models
│   │   └── user.js
│   │── routes
│   │   ├── send-email.ts
│   │   └── user.ts
│   │── middlewares
│   │   └── protectBackendRoute.ts
│   ├── index.ts
│   │── nodemon.json
│   │── tsconfig.json
│   │── .env
│   │── package.json
│   └── package-lock.json
├── Frontend
│   │── app
│   │   ├── (default_site)
│   │   │   ├── _blog
│   │   │   │   ├── [slug]
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── layout.tsx
│   │   ├── lib
│   │   │   └── definition.ts
│   │   ├── utils
│   │   │   ├── dateformatter.ts
│   │   │   └── getBlogData.ts
│   │   ├── ui
│   │   │   ├── components
│   │   │   │   ├── marquee.tsx
│   │   │   │   └── grid.tsx
│   │   │   ├── landing
│   │   │   │    ├── Compnaies.tsx
│   │   │   │    └── News.tsx
│   │   │   ├── universal
│   │   │   │    ├── Navbar.tsx
│   │   │   │    ├── end-card.tsx
│   │   │   │    ├── FAQ.tsx
│   │   │   │    ├── features-cum-images.tsx
│   │   │   │    ├── features.tsx
│   │   │   │    ├── hero-video.tsx
│   │   │   │    ├── Hero.tsx
│   │   │   │    ├── Pricing.tsx
│   │   │   │    ├── spotlight-image.tsx
│   │   │   │    ├── Testimonials.tsx
│   │   │   │    └── Trust.tsx
│   │   │   ├── blog
│   │   │   │    └── blog-card.tsx
│   │   │   └── loaders.tsx
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   ├── notfound.tsx
│   │   └── next-sitemap.js
│   │── public
│   │   ├── blog
│   │   │   ├── getting-started
│   │   │   |    ├── images
│   │   │   |    |   └── image.png
│   │   │   |    └── content
│   │   │   |        └── content.md
│   │   │   └──message-from-author
│   │   │        ├── images
│   │   │        |   └── image.png
│   │   │        └── content
│   │   │            └── content.md
│   │   └── assets
│   │       └── ... folder with assets
│   │── .eslinktrc.jsom
│   │── next-env.d.ts
│   │── package.json
│   │── package-lock.json
│   │── next.config.mjs (enabled cross image fetching)
│   │── .env
│   │── next-sitemap.js
│   └── ..... Other configuration files (unaltered)
├── .gitignore
├── LICENSE
└── README.md
```

- `site map` and `robots.txt` are automatically generating by using libraries when build command is run.

## 🔥 Contributing

Contributions are always welcome! Additionally you can contact me by my email: **iamscientistmanas@gmail.com**. I am currently working on a .md based blog engine for this template

## 📷 Video

https://github.com/user-attachments/assets/365f919a-84ba-47e8-a664-ea4d45f90e90


## 🙌 Credits & Acknowledgements

- The design inspiration is taken from `cosmicthemes.com`, however the code style is different as well some designed has been changed. The original website can be found [here](https://galaxy.cosmicthemes.com/). I am currently working to implement .md based blog engine and policies page for this template.

## 🔒 License

This repository is open source and under [MIT](https://choosealicense.com/licenses/mit/) License.
