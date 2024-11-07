import { Inject, Injectable } from '@nestjs/common';
import UserService from './UserService';
import User from '../entity/User';
import UserRepository from '../repository/UserRepository';

@Injectable()
export default class UserServiceImpl implements UserService {
	@Inject('UserRepository')
	userRepository: UserRepository;

	getUser(id: number): User {
		throw new Error('Method not implemented.');
	}
	createUser(user: User): User {
		throw new Error('Method not implemented.');
	}
}
