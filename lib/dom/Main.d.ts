import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
}
declare const Main: (args?: args) => HTMLElement | Text;
export default Main;
