import { inject, injectable } from 'inversify';
import express, { Express } from 'express';
import { Config, RestSchema } from '../shared/libs/config/index.js';
import { Logger } from '../shared/libs/logger/index.js';
import { Component } from '../shared/types/index.js';
import { DatabaseClient } from '../shared/libs/database-client/index.js';
import { getMongoURI } from '../shared/helpers/index.js';
import { Controller, ExceptionFilter } from '../shared/libs/rest/index.js';


@injectable()
export class RestApplication {
  private readonly server: Express;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger,
    @inject(Component.Config) private readonly config: Config<RestSchema>,
    @inject(Component.DatabaseClient) private readonly databaseClient: DatabaseClient,
    @inject(Component.OfferController) private readonly offerController: Controller,
    @inject(Component.UserController) private readonly userController: Controller,
    @inject(Component.ExceptionFilter) private readonly appExceptionFilter: ExceptionFilter,

  ) {
    this.server = express();
  }

  private async initDb() {
    const mongoURI = getMongoURI(
      this.config.get('DB_USER'),
      this.config.get('DB_PASSWORD'),
      this.config.get('DB_HOST'),
      this.config.get('DB_PORT'),
      this.config.get('DB_NAME'),
    );

    return this.databaseClient.connect(mongoURI);
  }

  private async _initExceptionFilters() {
    this.server.use(this.appExceptionFilter.catch.bind(this.appExceptionFilter));
  }

  private async _initServer() {
    const port = this.config.get('PORT');
    this.server.listen(port);
  }

  private async _initController() {
    this.server.use('/offer', this.offerController.router);
    this.server.use('/users', this.userController.router);
  }

  private async _initMiddleware() {
    this.server.use(express.json());
  }

  public async init() {
    this.logger.info('Application initialization');

    this.logger.info('Init exception filters');
    await this._initExceptionFilters();
    this.logger.info('Exception filters initialization completed');

    this.logger.info('Init database...');
    await this.initDb();
    this.logger.info('Init database completed');

    this.logger.info('Init middleware...');
    await this._initMiddleware();
    this.logger.info('Init middleware completed');

    this.logger.info('Init controllers...');
    await this._initController();
    this.logger.info('Init controllers completed');

    this.logger.info('Trying to init server...');
    await this._initServer();
    this.logger.info('Init server completed');

    this.logger.info(`Server started on http://localhost:${this.config.get('PORT')}`);
  }
}
