
import chair from '../../../src/assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import bg from '../../../src/assets/images/bg.png'

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
    
    return (
        <header className='my-20' style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' className="max-w-sm rounded-lg shadow-2xl" />

                    <div className='mr-10'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                      
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;