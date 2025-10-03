// index.js

// Sample data (tutorial titles)
export const tutorials = [
  "what does the this keyword mean?",
  "what is the CONTEXT of execution?",
  "what is hoisting?",
  "what is scope?",
  "what are closures?",
  "what are promises?",
  "what is the event loop?",
  "what is event bubbling?",
  "what are arrow functions?",
  "what is a callback function?"
];

// Function to convert all tutorial titles into Title Case
export function titleCased() {
  return tutorials.map(title => {
    return title
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
}
