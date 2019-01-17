import { billingJob } from './../jobs/billing.job';
import { agenda } from './agenda.config';
import { amrJob } from '../jobs/amr.job';
import { tenantJob } from '../jobs/tenant.job';

export let defineAgenda = async () => {

  await billingJob();
  await amrJob();
  await tenantJob();

  agenda.start();
}
