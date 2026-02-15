import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error(
    "Por favor, defina a variável MONGO_URI no arquivo .env.local"
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) {
    console.log("Usando conexão existente do MongoDB");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      minPoolSize: 5,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    };

    console.log("Conectando ao MongoDB...");

    cached.promise = mongoose
      .connect(MONGO_URI!, opts)
      .then((mongoose) => {
        console.log("MongoDB conectado com sucesso!");
        return mongoose;
      })
      .catch((error) => {
        console.error("Erro ao conectar ao MongoDB:", error);
        cached.promise = null;
        throw error;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

// Event listeners para monitorar a conexão
mongoose.connection.on("connected", () => {
  console.log("🟢 Mongoose conectado ao MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.error("🔴 Erro na conexão Mongoose:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("🟡 Mongoose desconectado do MongoDB");
});

// Apenas utilizado em produção - Desligamento Elegante
if (process.env.NODE_ENV !== "production") {
  process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log(
      "Conexão MongoDB fechada devido ao encerramento da aplicação"
    );
    process.exit(0);
  });
}