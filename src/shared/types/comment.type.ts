import { User } from './index.js';

export type Comment = {
    content: string,
    postDate: Date,
    rating: number,
    user: User
}
