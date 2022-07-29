import { writable } from "svelte/store";
// import axios from "axios";

const ResponseStore = writable([
  "No, not a good guy.",
  "So sorry but that guy stinks.",
  "Seriously? No way is that guy good.",
  "Unfortunately, that guy is bad.",
  "Hate to be the bearer of bad news, but it's best you hear it from us first. No!",
  "Nope!",
  "hahaha! that guy?? lol no.",
  "One of the all time worst guys.",
  "Here's the answer in at least 10 different languages: no.",
  "This guy is not good.",
  "Not a good guy.",
  "Actually a bad dude.",
  "We do not like this guy.",
  "Do not engage with this guy.",
  "No, no, no. Absolutely not.",
  "Yikes! Not a good guy. Steer clear.",
  "This one is bad. Really bad.",
  'That\'s a "no" from me, dog.',
]);

export default ResponseStore;

// const getMessages = async () => {
//   let messages = writable([]);
//   try {
//     let { data } = await axios.get(`http://localhost:1337/api/responses/`);
//     return messages.set([...data]);
//   } catch (err) {
//     console.error("error", err);
//   }
// };

// export const allMessages = getMessages();
