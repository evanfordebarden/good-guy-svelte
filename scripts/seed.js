"use strict";

const {
  db,
  models: { User, Response },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  // Creating Users
  const users = await Promise.all([
    User.create({ username: "cody", password: "123" }),
    User.create({ username: "murphy", password: "123" }),
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded successfully`);

  // Creating Responses
  const responses = await Promise.all([
    Response.create({ message: "No, not a good guy." }),
    Response.create({ message: "So sorry but that guy stinks." }),
    Response.create({ message: "Seriously? No way is that guy good." }),
    Response.create({ message: "Unfortunately, that's a bad guy." }),
    Response.create({
      message:
        "Hate to be the bearer of bad news, but it's best you hear it from us first. No!",
    }),
    Response.create({ message: "Nope!" }),
    Response.create({ message: "hahaha! that guy?? lol no." }),
    Response.create({ message: "One of the all time worst guys." }),
    Response.create({
      message: "Here's the answer in at least 10 different languages: no.",
    }),
    Response.create({ message: "This guy is not good." }),
    Response.create({ message: "Not a good guy." }),
    Response.create({ message: "Actually a bad dude." }),
    Response.create({
      message: "Actually? Yeah, this guy is good. Wow.",
      isPositive: true,
    }),
  ]);

  console.log(`seeded ${responses.length} responses`);
  console.log(`seeded successfully`);

  /// returns
  return {
    users: {
      cody: users[0],
      murphy: users[1],
    },
    responses: responses.length,
  };
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
