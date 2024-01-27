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
    type: Type,
    bedrooms: number,
    maxAdults: number,
    price: number,
    goods: Good[],
    host: User,
    comments?: Comment[],
    location: Location,
};

export type Location = {
    latitude: number
    longitude: number
}

export type City = 'Paris' | 'Cologne ' | 'Brussels ' | 'Amsterdam ' | 'Hamburg' | 'Dusseldorf ';
export type Type  = 'apartment' | 'house' | 'room' | 'hotel';
export type Good = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';

export type User = {
    avatarUrl: string,
    isPro: boolean,
    name: string,
    mail: string,
    password: string
}

export type Comment = {
  content: string,
  postDate: Date,
  rating: number,
  user: User
}
