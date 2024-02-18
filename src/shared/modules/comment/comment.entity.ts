import { defaultClasses, getModelForClass, modelOptions, prop } from '@typegoose/typegoose';
// import { UserEntity } from '../user/user.entity.js';

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

  // @prop({
  //   ref: UserEntity,
  //   required: true
  // })
  // userId: Ref<UserEntity>;
}

export const CommentModel = getModelForClass(CommentEntity);
