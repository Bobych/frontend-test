import Image, { StaticImageData } from "next/image";
import styles from '@/components/team/member/member.module.scss';

interface MemberProps {
    name: string;
    description: string;
    imgSrc: StaticImageData;
}

export default function MemberComponent(props: MemberProps) {    
    return (
        <div className={styles.container}>
            <Image
              src={props.imgSrc}
              width={223}
              height={223}
              alt='Team Member'    
              className={styles.image}
            />
            <p className={styles.name}>{props.name}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}