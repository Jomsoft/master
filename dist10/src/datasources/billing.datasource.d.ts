import { juggler } from '@loopback/repository';
export declare class BillingDataSource extends juggler.DataSource {
    static dataSourceName: string;
    constructor(dsConfig?: object);
}
