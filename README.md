# Demonstration project Next-ft-Wasm
We decided to use Next.js since it combines frontend and backend side of the project and it can be useful for further extending and fiddle. We want to test Rust packages compiled to Wasm in various scenarios.  
--> http://wasm.stkl.cz  

## Modules demonstration
We have this modules in our aplication:
- [x] Hello Wasm, `Rust` <-> `JavaScript` intercommunication,
- [ ] Mock Authentication Middleware, `module` running in separate thread for all contexts - `TODO`.

## Build & run
Run these commands to build and push the application to dockerhub. 
```
docker build -t stepanklos/wasm .
docker run -p 3000:3000 stepanklos/wasm
docker push stepanklos/wasm
```  
Manually triggered automatic deployment in our GitHub Action [workflow](https://github.com/KlosStepan/Next-ft-Wasm/blob/main/.github/workflows/build-push-deploy.yaml).
# OLD README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
# Next-ft-Wasm
