import { writable } from "svelte/store";

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
]);

export default ResponseStore;
