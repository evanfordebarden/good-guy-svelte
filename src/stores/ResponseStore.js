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
  "That guy is not good.",
  "Not a good guy.",
  "Actually a bad dude.",
  "We do not like this guy.",
  "Please do not engage with this guy.",
  "No, no, no. Absolutely not.",
  "Yikes! Not a good guy. Steer clear.",
  "That one is bad. Really bad.",
  'That\'s a "no" from me, dog.',
  "Oof. Not that guy. Sorry.",
  "We really hope you're not serious. Fully not good.",
  "Hard to get any worse, honestly.",
  "Almost everyone is better than that guy.",
  "The definition of the word 'bad' and not in the fun way.",
  "We get that name a lot. The answer is always no.",
  "While he has some redeemable qualities...overall not good.",
  "This was a close call, but ultimately a bad guy.",
]);

export default ResponseStore;

// const getMessages = async () => {
//   let messages = writable([]);
//   try {
//     let { data } = await axios.get(`http://localhost:8080/api/responses/`);
//     return messages.set([...data]);
//   } catch (err) {
//     console.error("error", err);
//   }
// };

// export const allMessages = getMessages();
