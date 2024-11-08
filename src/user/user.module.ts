import { Module } from '@nestjs/common';
import UserController from './interface/UserController';
import UserServiceImpl from './domain/service/UserServiceImpl';
import UserFacade from './application/UserFacade';
import UserTypeOrmRepositoryImpl from './infrastructure/UserTypeOrmRepositoryImpl';
import UserTypeOrmRepository from './infrastructure/UserTypeOrmRepository';

@Module({
	controllers: [UserController],
	providers: [
		{
			provide: 'UserService',
			useClass: UserServiceImpl,
		},
		UserFacade,
		{
			provide: 'UserRepository',
			useClass: UserTypeOrmRepositoryImpl,
		},
		{
			provide: 'UserTypeOrmRepository',
			useClass: UserTypeOrmRepository,
		},
	],
	imports: [],
	exports: [],
})
export class UserModule {}
