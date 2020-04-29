# JeddyJS
 - Javascript Framework for Building Web UIs.

## Quick-Start

```sh
# Clone the Quick Start repository
$ git clone https://github.com/Jeraldy/jeddy-quick-start

# Go into the repository
$ cd jeddy-quick-start

# Install the dependencies and run
$ npm install && npm start
```

## Write-Your-First-App

```js
import TextView from "jeddy/core/TextView";
import { Jeddy } from "jeddy";

function App(){
    return TextView("Hello World")
}

Jeddy.Init(App());
```

## APIs

### Core

Exposes the native dom elements which you can 
use and customize according to your own needs.

```js
import Button from "jeddy/core/Button";
```
    
Add a script section with type **"text/x-tmpl"**, a unique **id** property and
your template definition as content:


**"o"** (the lowercase letter) is a reference to the data parameter of the
template function (see the API section on how to modify this identifier).

In your application code, create a JavaScript object to use as data for the
template:

## Tests

The JavaScript Templates project comes with
[Unit Tests](https://en.wikipedia.org/wiki/Unit_testing).  
There are two different ways to run the tests:

- Open test/index.html in your browser or
- run `npm test` in the Terminal in the root path of the repository package.

The first one tests the browser integration, the second one the
[node.js](http://nodejs.org/) integration.

## License

The JavaScript Templates script is released under the
[MIT license](https://opensource.org/licenses/MIT).