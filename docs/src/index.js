import { Jeddy, StatefulWidget } from "jeddy";
import reducers from './reducers/index';
import { updateState } from "jeddy/jredux";
import App from "./App";

class Main extends StatefulWidget {
    constructor(props) {
        super(props)
    }
    connectedCallBack() { updateState(this) }
    render() { 
        return App()
     }
}

Jeddy.Init({ app: new Main({ reducers }) });
