declare const Stepper: ({ child, activeStep, callBack, steps }: {
    child: HTMLElement;
    activeStep: number;
    callBack: (activeStep: number) => void;
    steps: string[];
}) => HTMLElement;
export default Stepper;
