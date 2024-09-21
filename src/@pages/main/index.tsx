import classNames from 'classnames/bind';
import styles from './main.style.module.scss';

const cx = classNames.bind(styles);

function Page() {
  return <main className={cx('main')}>ㅎㅎㅎ</main>;
}

export default Page;
