import {DefaultCrudRepository} from '@loopback/repository';
import {Notifications} from '../models';
import {BillingDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotificationsRepository extends DefaultCrudRepository<
  Notifications,
  typeof Notifications.prototype._id
> {
  constructor(
    @inject('datasources.billing') dataSource: BillingDataSource,
  ) {
    super(Notifications, dataSource);
  }


}
