import { readFileSync } from 'node:fs';
import { FileReader } from './file-reader.interface.js';
import { Good, Offer, OfferType } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([
        bedrooms,
        description,
        goods,
        host,
        id,
        images,
        isFavorite,
        isPremium,
        maxAdults,
        previewImage,
        price,
        rating,
        title,
        type,
        name,
        zoom,
        latitude,
        longitude,
        ]) => ({
        bedrooms: parseInt(bedrooms),
        city: { location: { zoom: parseInt(zoom), latitude: parseInt(latitude), longitude: parseInt(longitude) }, name },
        description,
        goods: goods as Good,
        host: host as any,
        id: parseInt(id),
        images: images.split(';').map((img) => img),
        isFavorite:  Boolean(isFavorite),
        isPremium:  Boolean(isPremium), 
        location: { latitude: Number(latitude), longitude: Number(longitude), zoom: Number(zoom)},
        maxAdults: parseInt(maxAdults),
        previewImage,
        price: parseFloat(price), 
        rating: parseFloat(rating), 
        title,
        type: type as OfferType,
      }));
  }
}
