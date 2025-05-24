export class Todo {
	constructor(
		public readonly id: string,
		public title: string,
		public completed: boolean,
		public readonly createdAt: Date = new Date(),
		public updatedAt: Date = new Date()
	) {}
}
