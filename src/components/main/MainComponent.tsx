import styles from '@/components/main/main.module.scss';
import Image from 'next/image';
import MainImage from '@/components/main/images/main-image.png'
import Arrow from '@/components/main/images/arrow.svg'
 
export default function Main() {
    return(
        <main className={styles.container}>
            <div className={styles.content}>
                <article className={styles.text}>
                    <p className={styles.firstItem} id='first'>
                        Быстрая, надежная, качественная ❤️
                    </p>
                    <p className={styles.secondItem} id='second'>
                        Студия онлайн разработки 🔥
                    </p>
                    <p className={styles.thirdItem} id='third'>
                        Команда с лучшими веб-разработчиками в СНГ 🚀
                    </p>
                </article>
                <Image
                    src={MainImage}
                    width={500}
                    height={500}
                    placeholder='blur'
                    alt='Main image'
                    className={styles.image}
                />
            </div>
            <Image src={Arrow} alt='arrow' className={styles.arrow} id='arrow'/>
        </main>
    )
}