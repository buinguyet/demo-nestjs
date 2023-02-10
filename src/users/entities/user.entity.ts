import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserTypeEnum } from '../enums';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({
    type: 'varchar',
    length: 20,
    enum: UserTypeEnum,
  })
  user_type: UserTypeEnum;

  @Column({
    type: 'varchar',
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 300,
  })
  email: string;

  @Column({
    type: 'bool',
    default: true,
  })
  active: boolean;

  @CreateDateColumn({ type: 'timestamp', nullable: true })
  create_at: Date;

  @UpdateDateColumn({ type: 'timestamp', nullable: true })
  update_at: Date;
}
