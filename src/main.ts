import {SomeService} from './some.service';
import {SomeController} from './some.controller';

export class Main {
    constructor() {
        const service = new SomeService();
        const controller = new SomeController(service);
    }
}

const main = new Main();