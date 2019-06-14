// tellFortune function should be here

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>JavaScript 1: Functions Exercise</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
  </head>
 <body>
<h1 class="page-header">The Fortune Teller</h1>
<ul>
 <li>Write a function named <code>tellFortune</code> that:
   <ul>
    <li>takes 4 arguments: number of children, partner's name, geographic location, job title.
    <li>outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
   </ul>
 <li>Call that function 3 times with 3 different values for the arguments.
</ul>
<button class="btn" onclick="showSolution(1)">See Solution</button>
<br><br>
<pre id="solution1" style="display:none;">
function tellFortune(jobTitle, location, partner, numKids) {
    var future = 'You will be a ' + jobTitle + ' in ' + location + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
    console.log(future);
}

tellFortune('tennis player', 'Texas', 'Shaq', 4);
tellFortune('stunt double', 'China', 'Steve Vanrensburg', 500);
tellFortune('George impersonator', 'Zimbabwe', 'The Nshima', 0);
  </body>
</html>
