import { DefaultCrudRepository } from '@loopback/repository';
import { Notifications } from '../models';
import { BillingDataSource } from '../datasources';
export declare class NotificationsRepository extends DefaultCrudRepository<Notifications, typeof Notifications.prototype._id> {
    constructor(dataSource: BillingDataSource);
}
