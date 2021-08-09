export class Task{

    title: string;
    description: string;
    state: boolean;

    constructor(pTitle = '', pDescription = ''){
        this.title = pTitle;
        this.description = pDescription;
        this.state = false;
    }
}