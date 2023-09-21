import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
    try {
     
        await prisma.bookstrore.deleteMany();
        await prisma.book.deleteMany();
        await prisma.author.deleteMany();

        // Reset auto-increment counters

        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;
        await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Bookstrore"`;

        await prisma.author.create({
            data: {
              name: 'Ibrahim Ahmed',
              email: 'ibrahim@gmail.com',
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.author.create({
            data: {
              name: 'Abdirahman Yusuf',
              email: 'abdirahman@gmail.com',
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.author.create({
            data: {
              name: 'Aizha Ahmed',
              email: 'aizha@gmail.com',
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          // Seed data for the books model
          await prisma.book.create({
            data: {
              name: 'Sheeko book',
              authId: 1,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.book.create({
            data: {
              name: 'xaawo taako',
              authId: 2,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.book.create({
            data: {
              name: 'somalidi hore',
              authId: 3,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          // Seed data for the bookstores model
          await prisma.bookstrore.create({
            data: {
              name: "maktabda",
              location: "jidka sayidka",
              bookId: 1,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.bookstrore.create({
            data: {
              name: "jigjigo yar",
              location: "torp",
              bookId: 3,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });
      
          await prisma.bookstrore.create({
            data: {
              name: "Hodan",
              location: "km 4",
              bookId: 2,
              created: new Date('2022-03-30T00:00:00.000Z'),
              updated: new Date('2022-03-30T00:00:00.000Z'),
            },
          });

        console.log("seeding is done!")

   
    } catch (error) {
     console.log(error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

seed()