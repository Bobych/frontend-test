import styles from '@/components/about/item/item.module.scss';
import Image, { StaticImageData } from 'next/image';

interface ItemProps {
    emoji: StaticImageData;
    text: string;
    description: string;
}

export default function Item(props: ItemProps) {
    return(
        <article className={styles.container}>
            <Image
              src={props.emoji}
              width={128}
              height={128}
              alt='Emoji'    
              className={styles.image}
            />
            <p className={styles.text}>{props.text}</p>
            <p className={styles.description}>{props.description}</p>
        </article>
    )
}