# Contributing

This is a guide for contributors.

## How to dev

- `pnpm run build`: Build for production
- `pnpm run dev`: Run for development
- `pnpm run lint`: Run static-checking
- `pnpm run test`: Run tests

## How to release

- Wait for passing CI...
- ```bash
  git switch main && git pull
  ```
- ```bash
  rm -rf dist && pnpm run build
  ```
- ```bash
  pnpm version <major|minor|patch>
  ```
  - If you want to release a pre-release version, use the following command instead:
    ```bash
    pnpm version <premajor|preminor|prepatch> --preid=<alpha|beta>
    ```
  - If you want to update the pre-release version, use the following command instead:
    ```bash
    pnpm version prerelease
    ```
- ```bash
  pnpm publish
  ```
  - If you want to publish a pre-release version, use the following command instead:
    ```bash
    pnpm publish --tag=<alpha|beta>
    ```
- ```bash
  git push --follow-tags
  ```
