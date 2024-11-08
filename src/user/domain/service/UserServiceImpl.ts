import { Inject, Injectable } from '@nestjs/common';
import UserService from './UserService';
import User from '../entity/User';
import UserRepository from '../repository/UserRepository';

@Injectable()
export default class UserServiceImpl implements UserService {
	@Inject('UserRepository')
	userRepository: UserRepository;

	async getUser(id: number): Promise<User> {
		const user: User = await this.userRepository.get(id);

		if (!user) {
			throw new Error('UserDoesNotExist');
		}

		return user;
	}
	async createUser(user: User): Promise<User> {
		throw new Error('Method not implemented.');
	}
}
