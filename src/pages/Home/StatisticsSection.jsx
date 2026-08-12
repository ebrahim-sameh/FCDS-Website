import React from 'react';
import { useTranslation } from 'react-i18next';

const StatisticsSection = () => {
   const { t} = useTranslation('home');
    // const isArabic = i18n.language === 'ar';
  

  const stats = [
    { key: 'faculty', value: '+50' },
    { key: 'founded', value: '2021' },
    { key: 'students', value: '+2000' },
    { key: 'departments', value: '5' },
  ];

  return (
    <section>
     <div
        style={{ backgroundColor: '#0b1f52' }}
        className="py-4"
      >
        <div className="container-fluid px-4 px-lg-5">
          <div className="row text-center g-4">

            {stats.map((stat) => (
              <div
                key={stat.key}
                className="col-6 col-lg-3"
              >
                <div
                  className="fw-bold mb-1"
                  style={{
                    color: '#f59e0b',
                    fontSize: '2rem',
                  }}
                >
                  {stat.value}
                </div>

                <div
                  style={{
                    color: '#c3cbe0',
                    fontSize: '0.9rem',
                  }}
                >
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div> 
    </section>
  );
};

export default StatisticsSection;