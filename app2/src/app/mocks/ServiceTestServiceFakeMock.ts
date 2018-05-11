export class ServiceTestServiceFakeMock {

    constructor() { }

    public example(): Promise<any> {
        return new Promise((resolve, reject) => {
            resolve('abc');
        });
    }
}
