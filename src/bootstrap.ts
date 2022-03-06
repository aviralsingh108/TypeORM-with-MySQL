import { getRepository } from "typeorm"
import { Tweet } from "./entity/Tweet"
import { User } from "./entity/User"

export const Bootstrap = async () => {
    const userRepo = getRepository(User)
    const user = userRepo.create({ firstName: 'Aviral', lastName: 'Singh', age: 26 })
    await userRepo.save(user).catch(err => {
        console.log('Error', err);
    })
    console.log('New User Saved', user);

    const tweetRepo = getRepository(Tweet)
    const tweet = new Tweet()
    tweet.title = 'My First Tweet';
    tweet.content = 'This is my first tweet with the length limit of the content being 300 characters'
    tweet.user = Promise.resolve(user);
    await tweetRepo.save(tweet).catch((err) => {
        console.log(err);
    })
}

export const find = async () => {
    const userRepo = getRepository(User)
    const user = await userRepo.findOne({
        where: { firstName: 'Aviral' }
    }).catch(err => {
        console.log(err);
    })
    if(user)
    console.log('User', user, await user.tweets);
}