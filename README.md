
# [Jeddy](https://jeddyjs.netlify.app/) &middot; [![Build Status](https://travis-ci.com/Jeraldy/JeddyJs.svg?branch=master)](https://travis-ci.com/Jeraldy/JeddyJs) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/jeddy.svg?style=flat)](https://www.npmjs.com/package/jeddy) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/Jeraldy/JeddyJs/blob/master/CONTRIBUTING.md)

Is a web UI development framework which makes it fun and enjoyable to create Web UIs using pure javascript **(No HTML Tags)**.
It is now easy to write clean, reusable and maintainable code with Jeddy.
```js
import { Jeddy, StatefulWidget } from "jeddy";
import Button from "jeddy/dom/Button";

class Main extends StatefulWidget {
    constructor() {
        super()
        this.state = 0
        return this.connect()
    }

    render() {
        return Button({
            children: [`Clicked: ${this.state} times`],
            onClick: () => this.setState(this.state + 1)
        })
    }
}

Jeddy.Init({ app: new Main() });
 ```

### Quick start
```sh
# Clone the Quick Start repository
$ git clone https://github.com/Jeraldy/jeddy-redux-quick-start

# Go into the repository
$ cd jeddy-redux-quick-start

# Install the dependencies and run
$ npm install && npm start
```
Then open: [http://localhost:9000/](http://localhost:9000/)

### How does Jeddy work?
Jeddy creates a virtual DOM in memory, which is a representation of the document object model. Instead of manipulating the browser's DOM directly, all the changes are applied to the virtual DOM first, and then, using a diffing algorithm, the minimal scope of necessary DOM operations is calculated. Finally, the real DOM tree is updated accordingly by applying changes only to what needs to be changed, ensuring minimum time consumed. This method guarantees a better user experience and higher app performance.


### More Examples
- TodoList [[Demo](https://jeddy-todo-list.netlify.app/)] [[Code](https://github.com/Jeraldy/jeddy-example-projects)]
- Form Items [[Demo](https://jeddy-form-items.netlify.app/)] [[Code](https://github.com/Jeraldy/jeddy-example-projects)]
- Simple Table(With data fetch from API end point) [[Demo](https://jeddy-simple-table.netlify.app/)] [[Code](https://github.com/Jeraldy/jeddy-example-projects)]
> To list your cool project here open a PR or send the links to [jeraldydeus@gmail.com](jeraldydeus@gmail.com)

### Browser Support
![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)
| --- | --- | --- | --- | --- |
Latest ✔ | Latest ✔ | Latest ✔ | 9.1+ ✔ | Latest ✔ |

### Documentation
You can find the JeddyJs documentation [here](https://jeddyjs.netlify.app/). Check out the [Getting Started](https://jeddyjs.netlify.app/) page for a quick overview. You can improve it by sending pull requests to [this repository](https://github.com/Jeraldy/JeddyJs).

### Contributors ✨
Thanks goes to these wonderful people:
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
     <td align="center"><a href="https://jeraldy.github.io/">
     <img src="https://avatars2.githubusercontent.com/u/29575941?s=400&u=ce945c5568ab55b31edf6d7a0ea20722c81684c9&v=4" width="100px;" alt="Jeraldy Deus"/><br /><sub><b>Jeraldy Deus</b></sub></a><br />
     <a href="https://github.com/Jeraldy/JeddyJs/commits?author=Jeraldy" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL+-CONTRIBUTORS-LIST:END -->
### Contributing
We love your input!
[Please read the guideline.](https://github.com/Jeraldy/JeddyJs/blob/master/CONTRIBUTING.md)

### License
The Jeddy JS is released under the
[MIT license](https://opensource.org/licenses/MIT).