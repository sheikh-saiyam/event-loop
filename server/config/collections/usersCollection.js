import { connectDB } from "../connectDB.js";

let usersCollection;
async function initCollection() {
  const collections = await connectDB();
  usersCollection = collections.users;
}
await initCollection();

export default usersCollection;
