import User from '../entity/User';

export default interface UserRepository {
	create(user: User): Promise<User>;
	get(id: number): Promise<User>;
	save(user: User): Promise<User>;
}
