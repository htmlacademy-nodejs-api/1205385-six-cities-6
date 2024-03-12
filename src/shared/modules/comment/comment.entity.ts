import { Ref, defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
import { OfferEntity } from '../offer/offer.entity.js';
import { UserEntity } from '../user/user.entity.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface CommentEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'comments',
    timestamps: true,
  }
})
// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class CommentEntity extends defaultClasses.TimeStamps {
  @prop({
    type: String,
    trim: true,
    required: true,
    minlength: [20, 'Minimum description length 20 characters'],
    maxlength: [500, 'Maximum description length 500 characters']
  })
  public content: string;

  @prop()
    rating: number;

  @prop()
    postDate: Date;

  @prop({
    ref: UserEntity,
    required: true
  })
    userId: Ref<UserEntity>;

  @prop({
    ref: OfferEntity,
    required: true
  })
    offerId: Ref<OfferEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
