import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    for?: string;
}
declare const Label: (args?: args) => HTMLElement;
export default Label;
