// "appId": "4834a6fa-a991-436e-ad4e-7e8d8c0ded3b",
// "displayName": "TestKeyVault",
// "name": "http://TestKeyVault",
// "password": "Gm31OhJ79i.wryvZDKoq-Ru6oQr.rdDnUL",
// "tenant": "1c650553-8a47-4cf9-a253-1f8f34833132"

const { DefaultAzureCredential } = require("@azure/identity");
const { SecretClient } = require("@azure/keyvault-secrets");

const vaultName = "AZKVMG";
const url = `https://${vaultName}.vault.azure.net`;

const credential = new DefaultAzureCredential();
const client = new SecretClient(url, credential);

const secretName = "db";

async function main() {
  try {
    const latestSecret = await client.getSecret(secretName);
    console.log(`Latest version of the secret ${secretName}: `, latestSecret);

    return latestSecret;
  } catch (error) {
    console.log(error);
  }

  return null;
}

// main()

module.exports = main;

// const { DefaultAzureCredential } = require('@azure/identity');
// const { SecretClient } = require('@azure/keyvault-secrets');

// class KeyVault {
//   static async getSecret(secretName) {
//     const credential = new DefaultAzureCredential();

//     const vaultName = "AZKVMG";
//     const url = `https://${vaultName}.vault.azure.net`;

//     const secretClient = new SecretClient(url, credential);

//     try {
//       return await secretClient.getSecret(secretName).value;
//     } catch (error) {
//       console.error(error);

//       throw new Error(error);
//     }
//   }
// }

// KeyVault.getSecret('db').then(res=>console.log(res))
// module.exports = KeyVault;
