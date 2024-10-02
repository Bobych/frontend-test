import styles from '@/components/header/header.module.scss';

export default function Header() {
    return(
        <header className={styles.header}>
            <p>CODE BRANCH</p>
            <section>
                <a id='link' href='#team'>команда</a>
                <a id='link' href='#about'>о нас</a>
            </section>
        </header>
    )
}