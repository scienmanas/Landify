<div align="center">
  <img src="" alt="Logo">
</div>

# 🔰 Landify

- A template which can used for your next SaaS product, its completely free, have already configured basic backend, fully written in typescript. Make your landing page a little cool.

- For this project I only deployed [frontend](https://landify-sepia.vercel.app/) on `vercel` under free tier, but many services such as `EC2`, `render.com` can be used to node backend.

## 📚 Tech Stack

- **Client:** Next JS, TailwindCSS
- **Server:** Node, Express
- **Datebase:** Mongo DB

## 📦 API Reference, Routes & Misc

| Route                      | Type     | Protected | Parameter                                                                                           | Description                                       |
| :------------------------- | :------- | :-------- | :-------------------------------------------------------------------------------------------------- | :------------------------------------------------ |
| `/api/services/send-email` | `POST`   | No        | `toName`, `toEmail`, `subject`, `message` (all body)                                                | Used to send mails                                |
| `/api/data/get-news`       | `GET`    | No        | `category`, `country`, `page`, `limit` (all query)                                                  | Used to fetch news                                |
| `/api/data/store-news`     | `POST`   | Yes       | `headline`, `description`, `category`, `country`, `publisher`, `image_link`, `news_link` (all body) | Push news to database fetched by `update-data.js` |
| `api/data/delete-news`     | `DELETE` | Yes       | `None`                                                                                              | Delete news every 24 hour (5 items)               |

- This project also has a `cron-job` which runs every `20 minutes` to add new data to database. This may be commmented while on development mode (suggested).
- Also a `cron-job` to delete database items is scheduled and run `once every day` to delete 5 items from database. This may be also commmented while on development mode (suggested).
- `Vercel Analytics` is also enabled for this web app

## 🔩 Environment Variables

This project requirement .env configuration in `Backend` as well in `Frontend` folder.

### Backend

| Varibale      | Description                                     |
| :------------ | :---------------------------------------------- |
| `MONGODB_URI` | Database URI                                    |
| `PORT`        | Port number for backend (5000)                  |
| `EMAIL`       | admin mail address                              |
| `PASSWORD`    | App password of email account                   |
| `AUTH_KEY`    | Auth key to secure routes                       |
| `HASHED_KEY`  | Double SHA-256 Hashed Auth key to secure routes |

### Frontend

| Varibale   | Description |
| :--------- | :---------- |
| `SITE_URL` | Site URL    |

## 🔨 Setting Up

Follow the following instruction to setup the project and run locally

- Replace the backend URI to `http://localhost:5000` from `https://infopulse.onrender.com`
- Make sure, the environemental variables are set.
- Open two seperate terminals and run `npm install` and then `npm run dev` in both terminals, one for backend and one for frontend. `package.json` is configured in a way it will start the dev mode by running `npm run dev`.
- Hurray! your app will be started in development mode.

## ⚡ Features

- `Various News Types Supported:` World, General, Nation, Business, Technology, Entertainment, Sports, Science, Health.

- `Wide Range of Countries Supported:` India, Brazil, Canada, France, Japan, United States

## 📁 File Structure :

```
.
├── Backend
│   │── config
│   │   └── db.js
│   │── models
│   │   └── news.js
│   │── routes
│   │   ├── data.css
│   │   └── service.css
│   │── scripts
│   │   ├── update-data.js
│   │   └── delete-data.js
│   │── middlewares
│   │   └── protectRoute.js
│   ├── index.js
│   │── .env
│   │── package.json
│   └── package-lock.json
├── Frontend
│   │── app
│   │   ├── hooks
│   │   │   └── useInfiniteScroll.ts
│   │   ├── lib
│   │   │   └── definition.ts
│   │   ├── ui
│   │   │   ├── components
│   │   │   │   └── NewsCard.tsx
│   │   │   ├──landing
│   │   │   │    ├── Footer.tsx
│   │   │   │    ├── Hero.tsx
│   │   │   │    ├── Navbar.tsx
│   │   │   │    └── News.tsx
│   │   │   └── loaders.tsx
│   │   ├── error.tss
│   │   ├── favicon.ico
│   │   ├── global.css
│   │   ├── page.tsx
│   │   ├── layout.tsx
│   │   └── next-sitemap.js
│   │── public
│   │   ├── assets
│   │   │   └── ... folder with assets
│   │   └── fonts
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

## 📷 Screenshots

## 🙌 Credits & Acknowledgements

- The design inspiration is taken from `cosmicthemes.com`, however the code style is different as well some designed has been changed. The original website can be found [here](https://galaxy.cosmicthemes.com/). I am currently working to implement .md based blog engine and policies page for this template.

## 🔒 License

This repository is open source and under [MIT](https://choosealicense.com/licenses/mit/) License.
