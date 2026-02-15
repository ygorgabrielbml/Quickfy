// scripts/test-user.ts
import "dotenv/config";  // ← ADICIONA ESSA LINHA NO TOPO!
import { connectDB } from "@/lib/db/connection";
import User from "@/lib/db/models/users";
import bcrypt from "bcryptjs";

async function testUser() {
  const passwordHash = await bcrypt.hash("123456", 12)
  try {
    await connectDB();
    console.log("Conectado ao banco de dados!" )

    const email = "dev+learn1@quickfy.com";

    await User.deleteMany({ email });
    const createdUser = await User.create({
      name: "Learning User",
      email,
      passwordHash,
      role: "customer"
    });

    console.log("Usuário criado:", {
      id: createdUser._id.toString(),
      name: createdUser.name,
      passwordHash: createdUser.passwordHash,
      email: createdUser.email,
      role: createdUser.role,
    });

    const foundUser = await User.findOne({ email });
    console.log("Usuário encontrado:", {
      id: foundUser?._id.toString(),
      name: foundUser?.name,
      email: foundUser?.email,
      role: foundUser?.role,
    });
    
    await User.updateOne(
      { email },
      { name: "Learning User Updated", role: "company"}
    );

    const updatedUser = await User.findOne({ email });
    console.log("Usuário atualizado: ", {
      name: updatedUser?.name,
      role: updatedUser?.role,
    });
  } catch (error) {
    console.log("Erro ao conectar no BD:", error )
    process.exit(1)
  }
}

testUser();
