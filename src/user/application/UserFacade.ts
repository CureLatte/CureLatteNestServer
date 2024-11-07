import { Inject, Injectable } from '@nestjs/common';
import UserService from '../domain/service/UserService';

@Injectable()
export default class UserFacade {
	@Inject('UserService')
	userService: UserService;
}
