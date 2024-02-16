import { City, Good, Location, OfferType } from "../../../types/index.js";

export class CreateOfferDto {
  title: string;
  description: string;
  postDate: Date;
  city: City;
  previewImage: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  type: OfferType;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: Good[];
  userId: string;
  location: Location;
}
