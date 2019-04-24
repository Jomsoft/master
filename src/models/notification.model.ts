import {model, property, Model} from '@loopback/repository';
import * as admin from "firebase-admin";

@model()
export class NotificationModel extends Model {

    @property.array(String)
    listUnits: string[];

    @property({
        type: 'object'
    })
    data?: {[key: string]: string};

    @property({
        type: 'object'
    })
    notification?: admin.messaging.Notification;

    @property({
        type: 'object'
    })
    android?: admin.messaging.AndroidConfig;

    constructor(data?: Partial<NotificationModel>) {
        super(data);
    }
}
