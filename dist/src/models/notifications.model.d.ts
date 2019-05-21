import { NotificationModel } from "./notification.model";
export declare class Notifications extends NotificationModel {
    _id: string;
    userId: string;
    createdAt: Date;
    constructor(data?: Partial<Notifications>);
}
