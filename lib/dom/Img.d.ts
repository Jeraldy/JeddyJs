import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    height?: string;
    width?: string;
    alt?: string;
    src?: string;
}
declare const Img: (args?: args) => HTMLElement | Text;
export default Img;
