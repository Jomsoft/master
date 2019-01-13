import * as ora from 'ora';


export let amrCron = () => {

  let spinner = ora().start();
  spinner.text = 'loading';
  spinner.color = 'blue';

  setTimeout(() => {
    spinner.stop();
  }, 3000);

}
