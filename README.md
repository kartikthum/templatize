Templatize
===========

Yet another template library? Yes!
Well, Templatize aims to keep it really simple and compact. But again,
I wouldn't want to compare them with any of the other templating libraries.
Try it out, and use it if it suits your needs!

Included in the package is a templatize.js script file. At the moment, it
could either be used as a node module or on the browser.

Here's a simple sample of how to use it - 

var templateStr = "<table><tr><th>Name</th><th>Age</th></tr>[people:i[<tr><td>{{people[i].name}}</td><td>{{people[i].age}}</td></tr>]]</table>";

Now, templatize(templateStr)({people:[{name:"Bloc",age:35},{name:"Aron",age:"25"}]}); 
would return -

<table><tr><th>Name</th><th>Age</th></tr><tr><td>Bloc</td><td>35</td></tr><tr><td>Aron</td><td>25</td></tr></table>

Here's what you will need to know - 
Value token - {{/*path within a json object*/}}
Array token - [/*path to an array[template within the loop:index variable*/]].join(/*either literals or another value token, to be added only inbetween*/)
