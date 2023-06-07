// In order to avoid multiple prisma instance error when working with Next13 and Prisma we export this global variable into the needed parts of the project.

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV != "production") globalThis.prisma = client;

export default client;
