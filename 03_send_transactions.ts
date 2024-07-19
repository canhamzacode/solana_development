import dotenv from 'dotenv'
dotenv.config()
import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey, sendAndConfirmTransaction, SystemProgram, Transaction } from "@solana/web3.js";
import { getKeypairFromEnvironment } from '@solana-developers/helpers';



// get the secret key from the environment simulating a more dynamic option

// connect to cluster i.e devnet, testnet or mainnet
const connection = new Connection(clusterApiUrl("devnet"));
const sendersAddress = getKeypairFromEnvironment("SECRET_KEY");
const receiverAddress = new PublicKey("23wRQUTNurqBjnRYpwiSGKaUUAZTzi5so5mmhTgaJbWf")
const publicKey = sendersAddress.publicKey;

const amount = 0.3 * LAMPORTS_PER_SOL

console.log(sendersAddress)

const transaction = new Transaction()

const transferInstruction = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: receiverAddress,
    lamports: amount,
})

transaction.add(transferInstruction)
const signature = await sendAndConfirmTransaction(connection, transaction, [
    sendersAddress
])

console.log(`Tx sucessful, ${amount} SOL sent ${signature}`)

