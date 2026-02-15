// scripts/test-user.ts
import "dotenv/config";  // ← ADICIONA ESSA LINHA NO TOPO!
import { connectDB } from "@/lib/db/connection";
import User from "@/lib/db/model/users";
import bcrypt from "bcryptjs";

async function testUser() {
  try {
    console.log("🔄 Conectando ao MongoDB...");
    await connectDB();
    
    console.log("🔄 Criando usuário de teste...");
    
    const passwordHash = await bcrypt.hash("senha123", 12);
    
    const user = await User.create({
      name: "João Teste",
      email: "joao@teste.com",
      passwordHash: passwordHash,
      role: "customer"
    });
    
    console.log("✅ Usuário criado com sucesso!");
    console.log("📋 Dados:", {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    });
    
    console.log("\n🔍 Buscando usuário...");
    const found = await User.findOne({ email: "joao@teste.com" });
    console.log("✅ Encontrado:", found?.name);
    
    console.log("\n🧹 Limpando teste...");
    await User.deleteOne({ email: "joao@teste.com" });
    console.log("✅ Teste concluído!");
    
    process.exit(0);
    
  } catch (error) {
    console.error("❌ Erro:", error);
    process.exit(1);
  }
}

testUser();