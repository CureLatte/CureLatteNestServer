import User from '../domain/entity/User';
import UserRepository from '../domain/repository/UserRepository';
import UserTypeOrmRepository from './UserTypeOrmRepository';
import { Inject, Injectable } from '@nestjs/common';
import UserEntity from './entity/User.entity';

@Injectable()
export default class UserTypeOrmRepositoryImpl implements UserRepository {
	@Inject('UserTypeOrmRepository')
	typeOrmRepository: UserTypeOrmRepository;

	async create(user: User): Promise<User> {
		throw new Error('Method not implemented.');
	}
	async get(id: number): Promise<User> {
		const userEntity: UserEntity = await this.typeOrmRepository.findOneBy({
			id: id,
		});

		if (!userEntity) {
			return null;
		}

		return userEntity.toDomain();
	}
	async save(user: User): Promise<User> {
		const userEntity: UserEntity = await this.typeOrmRepository.save(
			UserEntity.fromDomain(user),
		);

		throw userEntity.toDomain();
	}
}
