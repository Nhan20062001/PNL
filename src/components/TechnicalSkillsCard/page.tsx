import './style.scss';

const TechnicalSkillsCardComponent = () => {
    return (
        <div className="technical-skills-card container">
            <div className='technical-skills-header'>
                <div className='rectangle'>
                    <div className='rectangle-top'></div>
                    <div className='rectangle-bottom'></div>
                </div>
                <h3>Technical Skills</h3>
            </div>

            <div className='technical-skills-main'>
                <div className='logo-skills'>
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
    );
}
export default TechnicalSkillsCardComponent;