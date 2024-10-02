import styles from '@/components/about/about.module.scss';
import Item from './item/ItemComponent';
import nerd from './images/1.png';
import party from './images/2.png';
import rocket from './images/3.png';
import chart from './images/4.png';

export default function About() {
    return(
        <section className={styles.section} id='about'>
            <p className={styles.title}>О нас</p>
            <main className={styles.container}>
                <Item emoji={nerd} text='Команда основана в 2019 году' description='Начали брать мелкие заказы на фриланс' />
                <Item emoji={party} text='Старт фриланс карьеры в 2020' description='Сначала это были маленькие пет проекты' />
                <Item emoji={rocket} text='Набор сотрудников в команду' description='В настоящее время расширяем состав команды' />
                <Item emoji={chart} text='Работа с большими компаниями' description='В 2022 начали работать с большими компаниями' />
            </main>
        </section>
    )
}