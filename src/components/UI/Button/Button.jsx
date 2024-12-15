import Link from "next/link";
import classNames from "classnames";

import styles from "./Button.module.scss";

export const Button = ({ text, secondary, href }) => {
    return (
        <Link className={classNames(styles.button, { [styles.secondary]: secondary })} href='/'>
            {text}
        </Link>
    )
}