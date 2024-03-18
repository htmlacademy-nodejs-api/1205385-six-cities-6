import { inject, injectable } from 'inversify';
import { Request, Response } from 'express';
import { BaseController, HttpMethod } from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/index.js';
import { OfferService } from './offer-service.interface.js';
import { OfferRdo } from './rdo/offer.rdo.js';
import { fillDTO } from '../../helpers/index.js';

@injectable()
export class OfferController extends BaseController {
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) protected readonly offerService: OfferService
  ) {
    super(logger);

    this.logger.info('Register routes for Offer controller...');

    this.addRoute({path: '/', method: HttpMethod.GET, handler: this.index});
    this.addRoute({path: '/create', method: HttpMethod.POST, handler: this.create});
  }

  public async index(_req: Request, res: Response): Promise<void> {
    const offer = await this.offerService.find();
    const responseData = fillDTO(OfferRdo, offer);
    this.ok(res, responseData);
  }

  public async create(_req: Request, res: Response): Promise<void> {
    this.ok(res, 'create');
  }
}
