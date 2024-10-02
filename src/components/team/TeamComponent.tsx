import MemberComponent from './member/MemberComponent';
import stamp from '@/components/team/images/stamp.png';
import gladiator from '@/components/team/images/gladiator.png';
import boobych from '@/components/team/images/boobych.png';
import styles from '@/components/team/team.module.scss';

export default function TeamComponent() {
    return (
        <div className={styles.container} id="team">
            <p className={styles.title}>Команда\\\ Dream team</p>
            <div className={styles.members}>
                <MemberComponent name='stamp_qw' description='founder\\\ full-stack developer' imgSrc={stamp}/>
                <MemberComponent name='gladiator' description='founder\\\ back-end\\\ devops' imgSrc={gladiator}/>
                <MemberComponent name='boobych' description='external\\\ front-end\\\ back-end' imgSrc={boobych}/>
            </div>
        </div>
    )
}