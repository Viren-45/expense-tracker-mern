// src/config/db.js
import dns from "node:dns";
import mongoose from "mongoose";

// Optional override for machines where Node's DNS fails SRV lookups (e.g. some Windows setups)
if (process.env.DNS_SERVERS) {
  dns.setServers(process.env.DNS_SERVERS.split(","));
}

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MongoDB Connection Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;