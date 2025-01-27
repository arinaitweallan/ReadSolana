import { Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const suppliedPublicKey = process.argv[2];

// Function to validate Solana public address
function isValidSolanaAddress(address: string): boolean {
  try {
    const publicKey = new PublicKey(address);
    return publicKey.toString() === address; // Check if the address is a valid PublicKey
  } catch (error) {
    return false; // If an error is thrown, the address is invalid
  }
}

if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}
if (!suppliedPublicKey) {
  throw new Error("Provide a public key to check the balance of!");
}

// Check if the supplied public key is valid
if (!isValidSolanaAddress(suppliedPublicKey)) {
  throw new Error("Invalid Solana public address provided!");
}
const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports / LAMPORTS_PER_SOL;

console.log(
  `The balance for the wallet at address ${publicKey} is ${balanceInSOL}!`,
);
