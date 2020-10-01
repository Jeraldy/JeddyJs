import { NodeArgs } from '../core/Args';
export interface args extends NodeArgs {
    href?: string;
    download?: string;
    hrefLang?: string;
    media?: string;
    ping?: string;
    referrerPolicy?: string;
    rel?: string;
    target?: string;
}
declare const A: (args?: args) => HTMLElement;
export default A;
