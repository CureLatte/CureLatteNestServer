import User from '../entity/User';

export default interface UserService {
	getUser(id: number): Promise<User>;
	createUser(user: User): Promise<User>;
}
