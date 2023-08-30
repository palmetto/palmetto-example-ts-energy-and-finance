<p align="center">
  <a href="https://palmetto.com" rel="noopener" target="_blank"><img width="150" src="https://storage.googleapis.com/alchemy-next-prod/palmetto.png" alt="Palmetto logo"></a></p>
</p>

<h1 align="center" style="border-bottom: none;">Palmetto Energy and Finance API TypeScript Sample</h1>
 
# Links
- [Palmetto Energy and Finance API docs](https://docs.palmetto.com)

# Summary
This project is a sample of how to use the Palmetto Energy and Finance API in TypeScript.  The goal of this project is to quickly bootstrap a developer with the following:
1. How to programmatically generate a Typescript library to make calling Palmetto APIs simple and easy. 
2. How to setup authentication for Palmetto APIs
3. How to call and get the response from some of the key APIs

# Getting Started
In order to get started and make your first succesfull API calls you will need to do the following:
1. Clone this repo
2. Run `npm install` to install all the packages
3. Run `npm run generate` to generate the Palmetto Energy and Finance client SDKs
4. Create a .env file in the root of the project and add the following variables:
```
PALMETTO_ACCOUNT_EMAIL=YOUR_SERVICE_ACCOUNT_EMAIL@DOMAIN.COM
PALMETTO_ACCOUNT_PASSWORD=YOUR_SERVICE_ACCOUNT_PASSWORD
```

There is a sample .env file called `.env.example` that you can rename to `.env` and put your values in. 
‼️ **If you do not have a service account please contact developer-support@palmetto.com**

5. Run the samples by running `npm run start`

The examples shown in the sample are not meant to be exhaustive but a good starting point. For more information please refer to https://docs.palmetto.com 
