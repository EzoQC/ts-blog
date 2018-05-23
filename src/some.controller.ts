import {SomeService} from './some.service';

export class SomeController {
    private service: SomeService;

    constructor(service: SomeService) {
        this.service = service;
        this.initializeEvents();
    }

    public writeMessage() {
        let model = this.service.getMessage();
        document.getElementById('hello-world').innerText = model.message;
    }

    private initializeEvents() {
        document.getElementById('btn-print').onclick = () => this.writeMessage();
    }
}