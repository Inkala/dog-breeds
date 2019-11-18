## About this test

To see this test working, clone the repository, type `npm install` from the root folder and then type `npm start`.

### Technologies used

For this test I chose to use [React](https://reactjs.org/) for it is not only the JavaScript tool in which I have more knowledge and experience, but also because it is the one used in Strands.

For the chart I used [Recharts](http://recharts.org/en-US/) because it is build with and for React, and D3 which was my first option, but  I found Recharts was much more simple and good enough for a small pie chart like the one in this test.

I also used [randomcolors](https://www.npmjs.com/package/randomcolor). An npm package to give random colors to the elements in the chart.

### Success

All the functionalities that were added to the app are working as expected. I also decided to make the label in the pie chart only appear on hover because it was not very readable when they all showed at the same time. I also added a list of all the breeds with the percentage in the side for reference.

### Challenges

I had never used a library for data visualization so I had to look through the documentation and understand how it worked. Many things are taken from the documentation and examples.

### What to improve

For an app with one single view, I don't think that Redux is necessary, but if I had more time, I would have liked to implement it.

I would have also liked to add the second chart with the top 10 breeds. For that I would have sorted the array I created with the data by picture percentage, take the first 10 and sort it again alphabetically.

For this second chart, I would have probably left the labels visible all the time.

I would have added some tests, but since I haven't done that since I first learned it, I would have had to do some research to remember how to do it and would need more time.

And I would have liked to connect the breeds list and the chart so when you click a breed in the list, the label in the Pie Chart appears. For this I would try to set the state with the active index, the same way it is done for the pie chart.

### Additional notes

All working code is in the branch Master, but I will create some new branches because I want to implement Redux and the other things I mentioned. I will not merge this new branches with master.
