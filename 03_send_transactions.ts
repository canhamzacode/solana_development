import dotenv from 'dotenv'
dotenv.config()
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';

// get the secret key from the environment simulating a more dynamic option

const keypair = process.env.SECRET_KEY || null


if (!keypair){
    console.log("Pls provide a key pair");
    process.exit(1);
}

// connect to cluster i.e devnet, testnet or mainnet
const connection = new Connection(clusterApiUrl("devnet"));
const sendersAddress = getKeypairFromEnvironment("SECRET_KEY");
const receiverAddress = new PublicKey("0xDC9Fe849b822eE1763e4aC4a725f994A4365b179")

const amount = 0.3 * LAMPORTS_PER_SOL

const transaction = new Transaction()

const transferInstruction = SystemProgram.transfer({
    fromPubkey: sendersAddress.publicKey,
    toPubkey: receiverAddress,
    lamports: amount,
})

transaction.add(transferInstruction)
const signature = await sendAndConfirmTransaction(connection, transaction, [
    sendersAddress
])

console.log(`Tx sucessful, ${amount} SOL sent ${signature}`)

