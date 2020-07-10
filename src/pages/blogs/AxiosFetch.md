---
title: "Axios Vs. Fetch"
date: "2020-06-19"
author: "Robert Lovin"
featuredImage: "../../images/computerCoffee.jpg"
template: "blog"
---

One of the bigger debates within the web development community is between whether to use the Axios HTTP client or the native Fetch API to create RESTful requests. There are several different use cases where either is appropriate to use, and they both equally are effective solutions to fetch JSON data.

<br/>

Axios is a popular NPM module that simplifies the process of making HTTP requests to an API. Over 8.3 <b>million</b> developers download it each week, which is a testament to how important it is to the JavaScript community. The main advantage that Axios has to other modules is that the boilerplate code is lightweight, which makes it easier to handle more complicated XHR requests.

<br/>

To use Axios, install the package via NPM, than put in an import statement to import the module into the file. Afterwards, create an arrow function and place the 'async' keyword in front of the arguments list to make the function return a promise. Then, use the 'await' keyword and 'axios.get()' to return the desired data from the endpoint.

<br/>

```
const axios = require('axios'); 
OR import axios from 'axios'

const req = async () => {
    await axios.get('/${pathName}')
}

```


<br/>

On the other hand, the Fetch API is a great alternative, especially for simple requests. The fact that Fetch is a native JavaScript API allows developers to make HTTP requests while also reducing the size of their file bundle. If you need to make requests with low amounts of data, than using a library like Fetch should be sufficient. Also, Fetch is useful as a polyfill for the Axios library if you are writing code for browsers that cannot transpile ES6.

<br/>

If you want to use the Fetch API, just insert in the 'fetch' keyword, and then input the desired API endpoint. After, create a callback function that returns the promise from the API endpoint by using the '.then' keyword. A code example of this process is below.

<br/>

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

OR

async fetch('http://example.com/movies.json')

const response = await response.json;
const data = await data;

```

<br/>

Overall, both Axios and Fetch have benefits to them that make them invaluable to the developers everyday that use them. Both will be here to stay for the forseeable future as they are the gold standard for handling HTTP requests.

<br/>