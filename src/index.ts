type RecursiveObject = Record<string, string | number | Record<string, string | number> | string[] | number[]>

export class URLQueryParams extends URLSearchParams {
    constructor(init?: string | string[][] | URLSearchParams | RecursiveObject) {
        switch (typeof init) {
            case "object":
                if (init instanceof URLSearchParams) {
                    super(init);
                    break;
                } else if (Array.isArray(init) && Array.isArray(init[0])) {
                    super(init);
                    break;
                } else {
                    let normalised = [];
                    for (const [key, value] of Object.entries(init)) {
                        if (typeof value === "number" || typeof value === "string") {
                            normalised.push([key, value.toString()])
                        } else if (typeof value === "object") {
                            if (Array.isArray(value)) {
                                for (let innerValue of value) {
                                    normalised.push([`${key}[]`, innerValue.toString()])
                                }
                            } else for (const [innerKey, innerValue] of Object.entries(value)) {
                                normalised.push([`${key}[${innerKey}]`, innerValue.toString()])
                            }
                        }
                    }
                    super(normalised);
                }
                break;

            case "undefined":
            case "string":
                super(init);
                break;
            default:
                super();
        }
    }

    append(param: string, values: string | number | (string | number)[] | Record<string, string | number>) {
        if (typeof values === "object") {
            if (Array.isArray(values)) this.appendArray(param, values);
            else this.appendObject(param, values);
        } else return super.append(param, values.toString());
    }

    private appendArray(param: string, values: (string | number)[]) {
        for (let value of values) {
            super.append(param + "[]", value.toString());
        }
    }

    private appendObject(param: string, values: Record<string, string | number>) {
        for (const [innerKey, innerValue] of Object.entries(values)) {
            this.append(`${param}[${innerKey}]`, innerValue.toString())
        }
    }
}