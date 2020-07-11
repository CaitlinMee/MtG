//https://medium.com/better-programming/angular-api-calls-the-right-way-264198bf2c64

export class QueryStringParamters {
    private paramsAndValues: string[];

    constructor() {
        this.paramsAndValues = [];
    }

    public push(key: string, value: Object): void {
        value = encodeURIComponent (value.toString());
        this.paramsAndValues.push([key, value].join('='));
    }

    public toString = (): string => this.paramsAndValues.join('&');
}