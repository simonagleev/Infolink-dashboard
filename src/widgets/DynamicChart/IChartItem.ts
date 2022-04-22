
interface IChartValue {
    value: number;
    stamp: number; 
}

export interface IChartItem {
    name: string;
    color: string;
    code: keyof {
        contract: 5;
        scenario: 4;
        fact: 3;
        plan: 2;
        progress: 1;
    };
    values: IChartValue[];
}

export default IChartItem;
