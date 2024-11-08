export default class CommonEntity {
	id: number;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;

	constructor(input: any) {
		this.id = input.id;
		this.createdAt = input.createdAt;
		this.updatedAt = input.updatedAt;
		this.deletedAt = input.deletedAt;
	}
}
