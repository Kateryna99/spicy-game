import styles from './page.module.scss';
import { Header } from '@components/Header';
import {Main} from "@main/index";
import {Footer} from "@components/Footer/Footer";

export default function Home() {
    return (
            <div className={styles.wrapper}>
                <Header />

                <Main />

                <Footer />
            </div>
    );
}
