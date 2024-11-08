import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';
import BaseEntity from '../../../common/entity/BaseEntity';
import User from '../../domain/entity/User';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity {
	@Column({ name: 'nick_name', type: 'varchar' })
	nickName: string;

	@Column({ name: 'email', type: 'varchar' })
	email: string;

	public toDomain(): User {
		return new User({
			id: this.id,
			nickName: this.nickName,
			email: this.email,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			deletedAt: this.deletedAt,
		});
	}

	public static fromDomain(domain: User) {
		const userEntity = new UserEntity();

		userEntity.id = domain.id;
		userEntity.nickName = domain.nickName;
		userEntity.email = domain.email;
		userEntity.createdAt = domain.createdAt;
		userEntity.updatedAt = domain.updatedAt;
		userEntity.deletedAt = domain.deletedAt;

		return userEntity;
	}
}
