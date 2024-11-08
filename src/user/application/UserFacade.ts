import { Inject, Injectable } from '@nestjs/common';
import UserService from '../domain/service/UserService';
import User from '../domain/entity/User';

@Injectable()
export default class UserFacade {
	@Inject('UserService')
	userService: UserService;

	async getUser(id: number): Promise<User> {
		return await this.userService.getUser(id);
	}
}
