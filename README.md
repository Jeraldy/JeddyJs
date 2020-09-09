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

#### Step 1: Clone the quick start repository
    - $ git clone https://github.com/Jeraldy/jeddy-quick-start
    - $ cd jeddy-quick-start
    - $ npm install && npm start
Then open: [http://localhost:9000/](http://localhost:9000/)

#### Step 2: Folder Structure
.
+-- _config.yml
+-- _drafts
|   +-- begin-with-the-crazy-ideas.textile
|   +-- on-simplicity-in-technology.markdown
+-- _includes
|   +-- footer.html
|   +-- header.html
+-- _layouts
|   +-- default.html
|   +-- post.html
+-- _posts
|   +-- 2007-10-29-why-every-programmer-should-play-nethack.textile
|   +-- 2009-04-26-barcamp-boston-4-roundup.textile
+-- _data
|   +-- members.yml
+-- _site
+-- index.html
#### Step 3: Coding your app

#### Step 4: Deploying


### More Examples
- [TodoList](https://en.wikipedia.org/wiki/Unit_testing)
- [JRedux](https://en.wikipedia.org/wiki/Unit_testing)
- [Ecommerce](https://en.wikipedia.org/wiki/Unit_testing)
- To your project link [jeraldydeus@gmail.com](jeraldydeus@gmail.com)


### Contributing
The JavaScript Templates project comes with
[Unit Tests](https://en.wikipedia.org/wiki/Unit_testing).  
There are two different ways to run the tests:

### License
The Jeddy JS is released under the
[MIT license](https://opensource.org/licenses/MIT).