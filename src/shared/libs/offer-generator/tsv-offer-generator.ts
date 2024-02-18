import dayjs from 'dayjs';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../helpers/index.js';
import { OfferGenerator } from './offer-generator.interface.js';
import type { MockServerData } from '../../types/index.js';

const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const MIN_RATING = 1;
const MAX_RATING = 5;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

const COORDINATE_MIN = 1;
const COORDINATE_MAX = 50;

export class TSVOfferGenerator implements OfferGenerator {
  constructor(private readonly mockData: MockServerData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomItem(['true', 'false']);
    const isFavorite = getRandomItem(['true', 'false']);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1).toString();
    const type = getRandomItem<string>(this.mockData.type);
    const bedrooms = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const maxAdults = generateRandomValue(MIN_RATING, MAX_RATING).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const avatar = getRandomItem<string>(this.mockData.avatarUrls);
    const isPro = getRandomItem(['true', 'false']);
    const name = getRandomItem<string>(this.mockData.users);
    const email = getRandomItem<string>(this.mockData.mails);
    const latitude = generateRandomValue(COORDINATE_MIN, COORDINATE_MAX, 5).toString();
    const longitude = generateRandomValue(COORDINATE_MIN, COORDINATE_MAX, 5).toString();

    return [
      title, description, postDate,
      city, previewImage, images, isPremium, isFavorite, rating, type, bedrooms, maxAdults, price, goods,
      avatar, isPro, name, email, latitude, longitude
    ].join('\t');
  }
}
