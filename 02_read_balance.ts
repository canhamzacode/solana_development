import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

// connect to cluster i.e devnet, testnet or mainnet
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("23wRQUTNurqBjnRYpwiSGKaUUAZTzi5so5mmhTgaJbWf");
const balance = await connection.getBalance(address)
const solBalance = balance / LAMPORTS_PER_SOL

console.log(`Balance of ${address} is ${solBalance}`);