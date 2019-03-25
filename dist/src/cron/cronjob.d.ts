/// <reference types="agenda" />
import { JobAttributes } from '../models/agenda.attributes';
import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaJob } from '../models/agenda.job.model';
import { ObjectId } from 'bson';
export declare let createJob: (agendaJob: AgendaJob) => Promise<"Jobs not created" | import("agenda").Job<object>>;
export declare let deleteJob: (objId?: string | ObjectId | undefined) => Promise<number | "Agenda instance is not ready" | undefined>;
export declare let startAgenda: () => Promise<void>;
export declare let stopAgenda: () => Promise<void>;
export declare let listenToAgenda: () => Promise<void>;
export declare let jobAttributesById: (options: AgendaProperties, attOptions: JobAttributes) => Promise<import("agenda").Job<import("agenda").JobAttributesData>[]>;
