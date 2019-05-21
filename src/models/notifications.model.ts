import {model, property} from '@loopback/repository';
import {NotificationModel} from "./notification.model";

@model({settings: {strictObjectIDCoercion: false}})
export class Notifications extends NotificationModel {

    @property({
        type: 'string',
        id: true,
    })
    _id: string;

    @property()
    userId: string;

    @property({
        type: 'date',
    })
    createdAt: Date;

    constructor(data?: Partial<Notifications>) {
        super(data);
    }
}
