import User from '../entity/User';

export default interface UserService {
	getUser(id: number): User;
	createUser(user: User): User;
}
