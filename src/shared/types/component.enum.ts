export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  DatabaseClient: Symbol.for('DatabaseClient'),

  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),

  UserController: Symbol.for('UserController'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),

  OfferController: Symbol.for('OfferController'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),

  CommentService: Symbol.for('CommentService'),
  CommentModel: Symbol.for('CommentModel'),
} as const;
