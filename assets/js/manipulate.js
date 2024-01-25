export function changeTitle() {
  // Change the title of the page to "(Your name)'s Portfolio"
  // Your code here

  document.title = 'our portfolio';
  return;
}

export function changeHeader() {
  // Change the name in the h1 of the page to your name
  // Your code here
  document.querySelector('h1').innerText = 'Hi we are namestest';
  return;
}

function changeAboutMe() {
  /* Update the first paragraph in the About Me section with a small
     passage about yourself */
  // Your code here

  let aboutMeP = document.querySelectorAll('.section > p');
  console.log(aboutMeP);
  aboutMeP[0].innerText = 'my first paragraph';
  aboutMeP[1].innerText = 'my second paragraph';
}

export default changeAboutMe;
