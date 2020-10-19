import { NodeArgs } from '../core/CommonArgs';
export interface args extends NodeArgs {
    for?: string;
}
declare const Label: (args?: args) => HTMLElement | Text;
export default Label;
