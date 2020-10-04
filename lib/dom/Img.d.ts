import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    height?: string;
    width?: string;
    alt?: string;
    src?: string;
}
declare const Img: (args?: args) => HTMLElement | Text;
export default Img;
