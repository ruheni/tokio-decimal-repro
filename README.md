This repo includes a small project made to highlight a potential issue with `Decimal` types in Prisma.

How to reproduce:

* create a postgres DB (you may need to pass additional parameters such as hostname and password)

```sh
createdb decimal-precision-repro
```

* fill in `.env`, change as appropriate

```sh
cp .env.example .env
```

* install dependencies

```sh
yarn
```

* migrate the schema

```sh
yarn prisma migrate dev
```

* run the source

```sh
yarn ts-node index.ts
```

You should see the error

```
number too large to fit in target type
```