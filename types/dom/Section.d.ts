import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
}
declare const Section: (args?: args) => HTMLElement | Text;
export default Section;
