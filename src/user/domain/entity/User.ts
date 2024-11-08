import CommonEntity from '../../../common/entity/CommonEntity';

export default class User extends CommonEntity {
	email: string;
	nickName: string;

	constructor(input: any) {
		super(input);
		this.email = input.email;
		this.nickName = input.nickName;
	}
}
