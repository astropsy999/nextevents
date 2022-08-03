import Button from '../ui/button';
import classes from './results-title.module.css';

function ResultsTitle(props) {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('uk-UK', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Події за {humanReadableDate}</h1>
      <Button link='/events'>Показати всі події</Button>
    </section>
  );
}

export default ResultsTitle;
