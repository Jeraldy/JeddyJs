declare const Stepper: ({ child, activeStep, callBack, steps }: {
    child: HTMLElement;
    activeStep: number;
    callBack: (activeStep: number) => void;
    steps: Array<string>;
}) => HTMLElement;
export default Stepper;
