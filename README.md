# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **JASMINE LIN**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/soft-spiced-avenue
## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://cdn.glitch.com/99e5b88e-d675-424a-8085-42ced0f0bb59%2Fwalkthrough.gif?v=1616284188106)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://www.w3schools.com/
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
I came across a few challenges when creating this submission.
The first challenge I can across was when I tested my program after wiring up the game buttons to the guess functions. I noticed that when I pressed the start button, I heard the first clue but did not see it.
I deduced that my semantic error had to be coming from my style.css file since this file took care of button rules. To fix this semantic error, I went back to the "Lighting up a button" part of the guide and
compared it with my code. From there I saw that I was missing #button#lit in my button rules.
The second challenge I can across was creating a random secret pattern. I used the developer.morilla.org guide I listed up above to help guide me in creating a random array of integers. When I first tried running
the program, I noticed nothing was happening. So I added a console.log() statement to print what was in my pattern array. From there I saw that my pattern array had a bunch of floating-point numbers. Going
back to the developer.morilla.org guide I realized that I forgot that Math.random returns a floating-point and that I need to use the Math.floor function to get integers. Running the program again, I see that the 
array now has valid values and the program runs. But after I ran the program another time I noticed that I was getting the same pattern as before, from that I realized that I forgot to clear the array once the 
game ended. The last challenge I came across was implementing the timer. I had read up on it to incorporate it. From the w3schools website, I came across the setTimeout() method. After implementing that,
I had the problem where the timer would not stop running until it hit zero seconds, so even if you got the current played pattern correct, the timer would not reset. I went back to the w3schools page and came
across the clearTimeout() method.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
After completing my submission I do have a few questions about web development. I am wondering what is the best web development IDE and why did we use Glitch a web-based IDE, instead of an IDE like Visual
Studio Code? While working on this project, I explored https://developer.mozilla.org/en-US/docs/Learn and looked a little at using APIs in web development. Integrating an API into a website is something I
want to learn how to do, as APIs are a powerful tool. So my question is how do we integrate an API? Scanning through the Developer Mozilla page about APIs, I came across I few terms that I am not too familiar 
with like Ajax, jQuery, and Node. I want to become familiar with all of these terms. My last question is how do we incorporate user authentication into websites? So many websites have user authentication so I 
feel like that is something essential to know. Overall, completing this project was a good experience. I know there is still so but to learn in web development, but this project made me even more interested in 
web development. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would want to make that game not end after eight rounds. I think it would be more fun and interesting for the game to continue until the player gets three 
strikes. So, I will also incorporate a current score counter and a high score variable, where the player can see their current score as they are playing and try to beat their high score. Another idea that I 
have is to have seven buttons to represent the chromatic scale, where each button represents the main 7 musical notes.



## License

    Copyright Jasmine Lin

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
