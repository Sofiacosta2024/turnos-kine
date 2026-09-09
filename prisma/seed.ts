import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  const passwordHash = await bcrypt.hash("turnos2026temp", 10);

  const kinesiologo = await prisma.users.create({
    data: {
      id: crypto.randomUUID(),
      nombre: "Sebastian",
      email: "valenrueda2011@gmail.com",
      passwordHash,
      role: "KINESIOLOGO",
    },
  });

  console.log("Kinesiologo creado con id:", kinesiologo.id);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());