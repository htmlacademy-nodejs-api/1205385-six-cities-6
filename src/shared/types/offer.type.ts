import { City, Comment, OfferType, Good, Location, User } from './index.js';

export type Offer = {
    title: string,
    description: string,
    postDate: Date;
    city: City,
    previewImage: string,
    images: string[],
    isPremium: boolean,
    isFavorite: boolean,
    rating: number,
    type: OfferType,
    bedrooms: number,
    maxAdults: number,
    price: number,
    goods: Good[],
    host: User,
    comments?: Comment[],
    location: Location,
};
