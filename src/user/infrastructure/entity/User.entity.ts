import { Column, Entity, PrimaryGeneratedColumn, Table } from 'typeorm';
import BaseEntity from '../../../common/entity/BaseEntity';

@Entity({ name: 'users' })
export default class UserEntity extends BaseEntity {
	@Column({ name: 'nick_name', type: 'varchar' })
	nickName: string;
}
