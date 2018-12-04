export class Todo {
    constructor(
        public readonly id: number,
        public readonly text: string,
        public readonly done: boolean = false,
    ) {

    }
}