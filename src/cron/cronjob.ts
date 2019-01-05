import { CronJob } from 'cron';

export let cron = new CronJob('*/5 * * * * *', () => {
  const d = new Date();
  console.log('Every 5 seconds: ', d.getSeconds());
});
