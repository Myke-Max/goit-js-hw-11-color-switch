# Color switcher

There is an array of colors in hex format and buttons `Start` and` Stop`.

`` '' html
<button type = "button" data-action = "start"> Start </button>
<button type = "button" data-action = "stop"> Stop </button>
``,

`` `js
const colors = [
  '#FFFFFF',
  '# 2196F3',
  '# 4CAF50',
  '# FF9800',
  '# 009688',
  '# 795548',
];
``,

Write a script that, after pressing the `Start` button, changes color once a second
background `body` to a random value from an array using inline style. When you press
to the `Stop` button, the background color change should stop.

> ⚠️ Please note that the `Start` button can be pressed an infinite number of times. Do It
> so that while the theme change is running, the `Start` button is inactive.

To generate a random number (the index of the element of the array of colors), use
function `randomIntegerFromInterval`.

`` `js
const randomIntegerFromInterval = (min, max) => {
  return Math.floor (Math.random () * (max - min + 1) + min);
};
``