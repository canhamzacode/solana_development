import dotenv from 'dotenv'
dotenv.config()
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

// get the secret key from the environment simulating a more dynamic option

const keypair = process.env.SECRET_KEY || null


if (!keypair){
    console.log("Pls provide a key pair");
    process.exit(1);
}

// connect to cluster i.e devnet, testnet or mainnet
const connection = new Connection(clusterApiUrl("devnet"));
const address = getKeypairFromEnvironment("SECRET_KEY");

const balance = await connection.getBalance(address.publicKey);
const solBalance = balance / LAMPORTS_PER_SOL

console.log(`Balance of ${address.publicKey} is ${solBalance}`);