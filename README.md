# Mock Server

This project is a mock server setup using [@mocks-server/main](https://www.mocks-server.org/), designed to simulate API responses for development and testing purposes.

## Installation

To set up this project, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/johnsilver94/mock-server.git
    cd mock-server
    ```

2. Install dependencies using pnpm:

    ```bash
    pnpm install
    ```

## Usage

1. To start the mock server:

    ```bash
    pnpm run mocks
    ```

2. To start the mock server without the inquirer CLI plugin:

    ```bash
    pnpm run mocks:clean
    ```

## Project Structure

- `mocks/`: Contains mock data and route definitions
- `mocks.config.js`: Configuration file for the mock server
- `package.json`: Project metadata and dependencies
- `pnpm-lock.yaml`: Lock file for pnpm dependencies

## Scripts

- `mocks`: Starts the mock server
- `mocks:clean`: Starts the mock server without the inquirer CLI plugin
- `lint`: Runs ESLint to check for linting errors
- `format`: Runs Prettier to format the code

## Dependencies

- [@mocks-server/main](https://www.npmjs.com/package/@mocks-server/main): ^4.1.0
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env): ^7.26.0
- [@babel/preset-typescript](https://www.npmjs.com/package/@babel/preset-typescript): ^7.26.0
- [eslint](https://www.npmjs.com/package/eslint): ^9.14.0
- [prettier](https://www.npmjs.com/package/prettier): ^3.3.3
- [typescript](https://www.npmjs.com/package/typescript): ^5.6.3

## License

This project is licensed under the ISC License.

## Author

Ion Cretu <cretuion94@gmail.com>
