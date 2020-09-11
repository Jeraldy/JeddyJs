### JeddyJS
We make it fun and enjoyable to build web UIs using pure javascript(No HTML Tags),
which makes it easy to write clean, reusable and maintainable code.

### Quick start
```sh
    # Clone the Quick Start repository
    $ git clone https://github.com/Jeraldy/jeddy-quick-start

    # Go into the repository
    $ cd jeddy-quick-start

    # Install the dependencies and run
    $ npm install && npm start
```
Then open: [http://localhost:9000/](http://localhost:9000/)

### How does Jeddyjs work?
Jeddyjs creates a virtual DOM in memory, which is a representation of the document object model. Instead of manipulating the browser's DOM directly, all the changes are applied to the virtual DOM first, and then, using a diffing algorithm, the minimal scope of necessary DOM operations is calculated. Finally, the real DOM tree is updated accordingly by applying changes only to what needs to be changed, ensuring minimum time consumed. This method guarantees a better user experience and higher app performance.

### Getting started
We will build a simple counter application using two approaches. The first part will use a a simple stateful widget, and then we will enhnace it by using [redux](https://redux.js.org/). The second approach is recommended for better state management and performance.
<p align="center">
  <img width="600" height="200" src="counter.PNG">
</p>
#### Step 1: Clone the quick start repository
    - $ git clone https://github.com/Jeraldy/jeddy-quick-start
    - $ cd jeddy-quick-start
    - $ npm install && npm start
Then open: [http://localhost:9000/](http://localhost:9000/)

#### Step 2: Folder structure

    ├── node_modules
    ├── public
    │   └── index.html
    ├── src
    │   ├── App.js
    │   └── index.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    ├── tsconfig.json
    └── webpack.config.js
We will be focusing on **index.html** and the **src** folder.
- **index.html**: This is the entry point of our site
```sh
    ├── public
        └── index.html
```
```html
<html lang="en">
<!--Some content has been suppressed for brevity-->
<body>
    <div id="root"></div>
	<script src="main.js"></script>
</body>
</html>
```
When running, our app will render its content into the div#root, therefore this div
should not be removed. The script tag with main.js is needed to load our compiled js files.
This is a regular web page so feel free to add global css, icons etc..

- **src**: Here is where will be writting our app logic
```sh
    ├── src
        ├── App.js
        └── index.js
```
  - **index.js**: This is what we have in the index.js file
```js
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";

class Main extends StatefulWidget {
    constructor() {
        super()
        return this.connect()
    }
    render() {
        return Div({
            children: [
                "Hello World"
            ]
        })
    }
}

Jeddy.Init({ app: new Main() });
```
The Main class has a mutable state since it extends a *StatefulWidget*,
This gives our app the power to act on user interactivity,And therefore updating the corresponding parts of the UI bindend to the state mutated. All we have to do is to ensure the state is notified for changes by 
using *this.setState*.

#### Step 3: Adding some logic
*index.js*
```js
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";

class Main extends StatefulWidget {
     constructor() {
        super()
        this.state = {
            counter: 0
        }
        return this.connect()
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return Div({
            children: [
              "Hello World"
            ]
        })
    }
}

Jeddy.Init({ app: new Main() });
```
 - Now we have a counter variable, and two functions to increment and decrement it.
#### Step 4: Updating our UI.
 - *index.js*
```js
import { Jeddy, StatefulWidget } from "jeddy";
import Div from "jeddy/dom/Div";
import Center from "jeddy/layouts/Center";
import Button from "jeddy/dom/Button";

class Main extends StatefulWidget {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        return this.connect()
    }

    handleIncrement() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    handleDecrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    render() {
        return Center({
            child: Div({
                children: [
                    `Value: ${this.state.counter}`,
                    Button({
                        children: ["Increment"],
                        onClick: () => this.handleIncrement()
                    }),
                    Button({
                        children: ["Decrement"],
                        onClick: () => this.handleDecrement()
                    }),
                ]
            })
        })
    }
}

Jeddy.Init({ app: new Main() });
 ```
- We have now added two buttons to increment and decrement our counter respectively.

#### Step 5: Let's make things pretty


#### Step 4: Deploying


### More Examples
- [TodoList](https://en.wikipedia.org/wiki/Unit_testing)
- [JRedux](https://en.wikipedia.org/wiki/Unit_testing)
- [Ecommerce](https://en.wikipedia.org/wiki/Unit_testing)
- To list your cool project here, send your link [jeraldydeus@gmail.com](jeraldydeus@gmail.com)


### Contributing
 For now you can email me at deusjeraldy@gmail.com

### License
The Jeddy JS is released under the
[MIT license](https://opensource.org/licenses/MIT).