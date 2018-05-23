import {SomeModel} from './some.model';

export class SomeService {
    public getMessage(): SomeModel {
        return {
            message: 'Hello world!'
        };
    }
}