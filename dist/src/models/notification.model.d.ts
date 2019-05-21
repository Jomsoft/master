import { Entity } from '@loopback/repository';
import * as admin from "firebase-admin";
export declare class NotificationModel extends Entity {
    listUnits: string[];
    data?: {
        [key: string]: string;
    };
    notification?: admin.messaging.Notification;
    android?: admin.messaging.AndroidConfig;
    constructor(data?: Partial<NotificationModel>);
}
