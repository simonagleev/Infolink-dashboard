
interface IChartValue {
    value: number;
    stamp: number; 
}

export interface IChartItem {
    name: string;
    color: string;
    code: keyof {
        contract: 1;
        scenario: 2;
        fact: 5;
        plan: 3;
        progress: 4;
    };
    values: IChartValue[];
}

export default IChartItem;
