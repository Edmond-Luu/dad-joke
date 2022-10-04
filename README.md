# React - Dad Joke Generator

Click [here](https://edmond-luu.github.io/dad-joke) or on the image below to see the app!

[![image](https://user-images.githubusercontent.com/26613209/193890119-79afded5-1727-4b4d-b187-d41e16dbda79.png)](https://edmond-luu.github.io/dad-joke)

This is a simple React app I made for fun that, as the title suggests, generates a Dad Joke. This application uses a free API service from [https://icanhazdadjoke.com](https://icanhazdadjoke.com).

All jokes generated are saved in an array called joke, which has a length of 2, in React's useState hook. The display would then show the joke that is in the array's  index 0 (the first item).

The Dad Joke Generator has three buttons, a generate button (green), a previous button (yellow), and a reset button (red).
* The generate button would simply generate a new Dad Joke from the API and add it to index 0 of the jokes array in the new state. The joke that was at index 0 in the joke array of the previous state would now be moved to index 1 in the new state.
* The previous button would reverse the order of the array, which would then also change the joke that is displayed on the screen.
* The reset button resets the whole joke array, clearing the display.

Here are some other features to improve the aesthetics and UX:
* When clicking on any of the buttons, the background color of the button would slightly change to a darker shade.
* When the mouse cursor hovers over any button, there is a short box shadow animation.
* Clicking on the joke displayed would copy it to the clipboard so that it can be pasted elsewhere.
