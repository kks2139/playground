import classNames from "classnames/bind";
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input(){
    return(
        <div className={cx('Input', {shadow: true})}>
            <input className={cx('test', 'back')}/>
            <div className={cx('test')}>
                <div className={cx('back')}>123</div>
            </div>
            <span className={cx('text')}>글자</span>
        </div>
    );
}

export default Input;