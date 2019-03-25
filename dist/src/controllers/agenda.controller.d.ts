/// <reference types="agenda" />
import { AgendaAttributes } from '../models/agenda.attributes';
import { AgendaProperties } from '../models/agenda.properties.model';
import { AgendaJob } from '../models/agenda.job.model';
import { Filter, Where, Count } from '@loopback/repository';
import { AgendaJobsRepository } from '../repositories/agenda-jobs.repository';
export declare class AgendaController {
    private agendaRepository;
    constructor(agendaRepository: AgendaJobsRepository);
    runAgenda(): Promise<void>;
    stopAgenda(): Promise<void>;
    getAgendaFunction(): Promise<any[]>;
    runAgendaAttributes(agendaAttributes: AgendaAttributes): Promise<import("agenda").Job<import("agenda").JobAttributesData>[]>;
    count(where?: Where): Promise<Count>;
    find(filters?: Filter): Promise<AgendaProperties[]>;
    createJobs(agenda: AgendaJob): Promise<"Jobs not created" | import("agenda").Job<object>>;
    updateAll(agenda: AgendaProperties, where?: Where): Promise<Count>;
    getAgendaById(id: string, filters?: Filter): Promise<AgendaProperties>;
    replaceById(agenda: AgendaProperties, id: string): Promise<void>;
    updateById(agenda: AgendaProperties, id: string): Promise<object>;
    deleteAgenda(id: string): Promise<number | "Agenda instance is not ready" | undefined>;
}
