import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: 'Tweets' })
export class Tweet {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: "varchar", length: 80 })
    title: string;

    @Column({ type: "varchar", length: 300 })
    content: string;

    // @Column()
    // user_id: string;

    @ManyToOne(type => User, (user) => user.tweets)
    user: Promise<User>

    // @JoinColumn({name:'user_id'})


}