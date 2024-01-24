export type Offer = {
    bedrooms: number
    city: City
    description: string
    goods: string
    host: Host
    id: number
    images: string[]
    isFavorite: boolean
    isPremium: boolean
    location: Location
    maxAdults: number
    previewImage: string
    price: number
    rating: number
    title: string
    type: OfferType
};

export type Location = {
    latitude: number
    longitude: number
    zoom: number
}

export type Host = {
    avatarUrl: string
    id: number
    isPro: boolean
    name: string
}

export type City = {
    location: Location
    name: string
}

export type OfferType  = 'apartment' | 'house' | 'room' | 'hotel';
export type Good = 'Breakfast' | 'Air conditioning' | 'Laptop friendly workspace' | 'Baby seat' | 'Washer' | 'Towels' | 'Fridge';


// const offer: Offer = {
//     bedrooms: 12,
//     city: {
//         location: {
//             latitude: 1,
//             longitude: 2,
//             zoom: 4,
//         },
//         name: 'string'
//     },
//     description: 'string',
//     goods: ['Breakfast', 'Air conditioning'],
//     host: {
//         avatarUrl: 'string',
//         id: 1,
//         isPro: false,
//         name: 'string'
//     },
//     id: 2,
//     images: [],
//     isFavorite: false,
//     isPremium: true,
//     location: {
//         latitude: 1,
//         longitude: 2,
//         zoom: 4,
//     },
//     maxAdults: 2,
//     previewImage: 'string',
//     price: 2,
//     rating: 43,
//     title: 'string',
//     type: 'house'
// }