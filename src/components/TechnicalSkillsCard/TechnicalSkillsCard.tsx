import styles from './style.module.scss'

const TechnicalSkillsCardComponent = () => {
    return (
        <div className='container'>
             <div className={styles['technical-skills-card']}>
                <div className={styles['technical-skills-header']}>
                    <div className={styles['rectangle']}>
                        <div className={styles['rectangle-top']}></div>
                        <div className={styles['rectangle-bottom']}></div>
                    </div>
                    <h3>Technical Skills</h3>
                </div>

                <div className={styles['technical-skills-main']}>
                    <div className={styles['logo-skills']}>
                        <img                       
                            src='/images/flutter-logo 1.png'
                            alt=''
                        >
                        </img>
                        <img                       
                            src='/images/nestjs 1.png'
                            alt=''
                        >
                        </img>
                        <img                       
                            src='/images/nextjs 1.png'
                            alt=''
                        >
                        </img>
                        <img                       
                            src='/images/reactJs 1.png'
                            alt=''
                        >
                        </img>
                    </div>
                </div>
            </div>
        </div>
       
    );
}
export default TechnicalSkillsCardComponent;