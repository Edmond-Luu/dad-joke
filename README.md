# React - Dad Joke Generator

Click [here](https://edmond-luu.github.io/dad-joke) or on the image below to see the app!

[![image](https://user-images.githubusercontent.com/26613209/193890119-79afded5-1727-4b4d-b187-d41e16dbda79.png)](https://edmond-luu.github.io/dad-joke)

This is a simple React app I made for fun that, as the title suggests, generates a Dad Joke. This application uses a free API service from [https://icanhazdadjoke.com](https://icanhazdadjoke.com).

The jokes generated are saved in React's useState hook, joke. The display would then show the joke.

The Dad Joke Generator has three buttons, a generate button (green), a previous button (yellow), and a reset button (red).
* The generate button would simply generate a new Dad Joke from the API and updates the joke state. The joke that was in the previous state would now be assigned the prevState, another useState hook.
* The previous button would reverse and update the states joke and prevJoke, which would then also change the joke that is displayed on the screen.
* The reset button resets both joke and prevJoke states to empty strings, clearing the display.

Here are some other features to improve the aesthetics and UX:
* When clicking on any of the buttons, the background color of the button would slightly change to a darker shade.
* When the mouse cursor hovers over any button, there is a short box shadow animation.
* Clicking on the joke displayed would copy it to the clipboard so that it can be pasted elsewhere.
* The joke and prevJoke states are saved in the localStorage, meaning that the 2 jokes are saved and can be accessed when reloading or exiting and returning to the app later.
* If the prevJoke state is empty, then the previous button will not do anything.
* The app is responsive and will work on mobile devices as well in portrait and landscape orientations.
  * In landscape orientation, the previous and reset buttons would be displayed in a row inside of a flexbox.
