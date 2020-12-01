# next-starter-antoine

My opinionated [Next.js](https://nextjs.org/) SSG starter template.

It starts from [the default Next.js template](https://github.com/vercel/next.js/tree/master/packages/create-next-app/templates/default), and adds:

- [TypeScript](https://www.typescriptlang.org/)
- [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/)
- [Bugsnag](https://www.bugsnag.com/)
- [Styled Components](https://styled-components.com/)
- [Absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)

See also [Next.js > examples >with-typescript-styled-components](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-styled-components)

It is made for static-only (SSG), not SSR.

## Requirements

- [Node](https://nodejs.org/) v10.13+
- [Yarn](https://yarnpkg.com/)

## Usage

    npx create-next-app [name] -e https://github.com/antoinerousseau/next-starter-antoine
    cd [name]
    cp {example,}.env

And configure your site infos in `package.json`, `pages/_app.tsx` and `public/site.webmanifest`.

## Commands

- `yarn dev`: start development mode
- `yarn lint`: check linting (Eslint + Prettier)
- `yarn build`: make production bundle
