import { inject, injectable } from 'inversify';
import { DocumentType, types } from '@typegoose/typegoose';
import { CommentService } from './comment-service.interface.js';
import { Component } from '../../types/index.js';
import { Logger } from '../../libs/logger/index.js';
import { CommentEntity } from './comment.entity.js';
import { CreateCommentDto } from './dto/create-comment.dto.js';

@injectable()
export class DefaultCommentService implements CommentService {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.CommentModel) private readonly commentModel: types.ModelType<CommentEntity>
  ) {}

  public async create(dto: CreateCommentDto): Promise<DocumentType<CommentEntity>> {
    const result = await this.commentModel.create(dto);
    this.logger.info(`New comment created: ${dto.content}`);

    return result;
  }

  public async findById(commentId: string): Promise<DocumentType<CommentEntity> | null> {
    return this.commentModel.findById(commentId).exec();
  }

  // public async findByCategoryName(commentContent: string): Promise<DocumentType<CommentEntity> | null> {
  //   return this.commentModel.findOne({name: commentContent}).exec();
  // }

  // public async findByCategoryNameOrCreate(commentContent: string, dto: CreateCommentDto): Promise<DocumentType<CommentEntity>> {
  //   const existedComment = await this.findByCategoryName(commentContent);

  //   if (existedComment) {
  //     return existedComment;
  //   }

  //   return this.create(dto);
  // }
}
