import { RealEstate } from '@/redux/api';
import React from 'react';
import s from './PropertyDesc.module.scss';
import { useTranslation } from 'react-i18next';

interface PropertyDescProps {
  dataProperty: null | RealEstate;
}

const PropertyDesc: React.FC<PropertyDescProps> = ({ dataProperty }) => {
  const { t } = useTranslation();

  console.log('dataProperty: ', dataProperty);

  return (
    <div className={s.property_desc}>
      <div className={s.property_desc_field}>
        <div className={s.porperty_desc_description}>
          <h3>{t('main.searchBar.DescOfProperty')}</h3>
          <p>
            {t('main.searchBar.Desc')}{' '}
            <span>{t('main.searchBar.DescData')}</span>
            <br />
            <br />
            <span>{t('main.searchBar.DescMith')}</span>
          </p>
          <div className={s.property_desc_description_facilities}>
            {dataProperty?.hasRestaurant && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/Restourant.png" alt="Restourant" />
                <p>{t('main.searchBar.restourant')}</p>
              </div>
            )}
            {dataProperty?.hasSpa && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/leaf.png" alt="leaf" />
                <p>{t('main.searchBar.leaf')}</p>
              </div>
            )}
            {dataProperty?.hasGym && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/Vessel.png" alt="Vessel" />
                <p>{t('main.searchBar.Gym')}</p>
              </div>
            )}
          </div>
          <div className={s.property_desc_description_facilities}>
            {dataProperty?.hasParking && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/Coin.png" alt="Coin" />
                <p>{t('main.searchBar.Parking')}</p>
              </div>
            )}
            {dataProperty?.hasCommunalPool && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/Pool.png" alt="Pool" />
                <p>{t('main.searchBar.communalPool')}</p>
              </div>
            )}
            {dataProperty?.hasClub && (
              <div className={s.property_desc_description_facilitie}>
                <img src="/Glass.png" alt="Glass" />
                <p>{t('main.searchBar.club')}</p>
              </div>
            )}
          </div>
        </div>
        <div className={s.property_desc_information}>
          <div className={s.property_desc_information_column}>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.apartmentArea')}</h3>
              <p>{`234 м²`}</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.room')}</h3>
              <p>3</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.Landmark')}</h3>
              <p>{t('main.searchBar.beach')} 0.5 км</p>
            </div>
          </div>
          <div className={s.property_desc_information_column}>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.landArea')}</h3>
              <p>{`${dataProperty?.landArea} м²`}</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.floor')}</h3>
              <p>{dataProperty?.floor}</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.Balcony')}</h3>
              <p>{`Balcony: ${dataProperty?.balconyAmount}`}</p>
            </div>
          </div>
          <div className={s.property_desc_information_column}>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.kitchenArea')}</h3>
              <p>{`${dataProperty?.kitchenArea} м²`}</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.bathroom')}</h3>
              <p>{dataProperty?.bathroomAmount}</p>
            </div>
            <div className={s.property_desc_information_column_card}>
              <h3>{t('main.searchBar.houseType')}</h3>
              <p>{dataProperty?.buildingType}</p>
            </div>
          </div>
        </div>
        <div className={s.property_desc_adaptive}>
          <h3>{t('main.searchBar.Facilities')}</h3>
          <div className={s.property_desc_adaptive_field}>
            <div className={s.property_desc_adaptive_facilities}>
              {dataProperty?.hasRestaurant && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/Restourant.png" alt="Restourant" />
                  <p>{t('main.searchBar.restourant')}</p>
                </div>
              )}

              {dataProperty?.hasSpa && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/leaf.png" alt="leaf" />
                  <p>{t('main.searchBar.leaf')}</p>
                </div>
              )}

              {dataProperty?.hasGym && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/Vessel.png" alt="Vessel" />
                  <p>{t('main.searchBar.Gym')}</p>
                </div>
              )}
            </div>
            <div className={s.property_desc_adaptive_facilities}>
              {dataProperty?.hasParking && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/Coin.png" alt="Coin" />
                  <p>{t('main.searchBar.Parking')}</p>
                </div>
              )}

              {dataProperty?.hasCommunalPool && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/Pool.png" alt="Pool" />
                  <p>{t('main.searchBar.communalPool')}</p>
                </div>
              )}

              {dataProperty?.hasClub && (
                <div className={s.property_desc_adaptive_facilitie}>
                  <img src="/Glass.png" alt="Glass" />
                  <p>{t('main.searchBar.club')}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDesc;
