# TypeScript Project Setup

This project shows how to install and set up TypeScript in a Node.js project.

## 1. Create a project

```bash
npm init -y
```

This creates a `package.json` file.

## 2. Install TypeScript

```bash
npm i typescript
```

If you get an `EACCES` npm cache permission error like this project did, fix it with:

```bash
sudo chown -R 501:20 "/Users/rachitagarwal/.npm"
```

Then run the install command again:

```bash
npm i typescript
```

## 3. Create a TypeScript config file

Use:

```bash
npx tsc --init
```

## 4. Project structure

This project is set up like this:

```text
src/   -> TypeScript source files
dist/  -> Compiled JavaScript output
```

Current `tsconfig.json` uses:

- `rootDir: ./src`
- `outDir: ./dist`

## 5. Compile TypeScript

Run:

```bash
npx tsc
```

Or use the project script:

```bash
npm run dev
```

This compiles `.ts` files from `src` into `.js` files in `dist`.

## 6. Run the compiled code

```bash
node dist/index.js
```

Or use:

```bash
npm start
```

example:

```ts
function sum(a: number, b: number): number {
  return a + b;
}

console.log(sum(2, 3));
```

Then compile:

```bash
npx tsc
node dist/index.js
```

Expected output:

```bash
5
```

## 8. Useful commands

```bash
npm init -y
npm i typescript
npx tsc --init
npx tsc
node dist/index.js
```
