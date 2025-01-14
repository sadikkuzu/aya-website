import { getPrismaClient } from "./client.ts";

import { seedLanguages } from "./seeds/languages.ts";
import { seedProfileAfetOrg } from "./seeds/profile-afet.org.ts";
import { seedProfileAya } from "./seeds/profile-aya.ts";
import { seedProfileDn } from "./seeds/profile-dn.ts";
import { seedProfileEser } from "./seeds/profile-eser.ts";
import { seedProfileEserLive } from "./seeds/profile-eser.live.ts";
import { seedProfileGonulluIo } from "./seeds/profile-gonullu.io.ts";
import { seedProfileHex } from "./seeds/profile-hex.ts";
import { seedUsers } from "./seeds/users.ts";

const main = async () => {
  const prisma = getPrismaClient();

  const { languageTr } = await seedLanguages(prisma);
  const { userEser } = await seedUsers(prisma, languageTr.code);
  const { profileAfetOrg } = await seedProfileAfetOrg(prisma, languageTr.code);
  const { profileAya } = await seedProfileAya(prisma, languageTr.code);
  const { profileDn } = await seedProfileDn(prisma, languageTr.code);
  const { profileEser } = await seedProfileEser(prisma, languageTr.code);
  const { profileEserLive } = await seedProfileEserLive(
    prisma,
    languageTr.code,
  );
  const { profileGonulluIo } = await seedProfileGonulluIo(prisma, languageTr.code);
  const { profileHex } = await seedProfileHex(prisma, languageTr.code);

  await prisma.$disconnect();
};

main();
