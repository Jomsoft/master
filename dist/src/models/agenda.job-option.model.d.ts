export interface AgendaJobOption {
    priority?: string;
    concurrency?: number;
    lockLimit?: number;
    lockLifetime?: number;
}
