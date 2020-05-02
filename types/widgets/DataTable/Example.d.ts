export default TableExample;
declare class TableExample {
    state: {
        data: any[];
    };
    componentDidMount(): void;
    generateData(): Promise<void>;
    action(id: any): any;
    render(): any;
}
