import { connectDB } from "../connectDB.js";

let eventsCollection;
async function initCollection() {
  const collections = await connectDB();
  eventsCollection = collections.events;
}
await initCollection();

export default eventsCollection;
