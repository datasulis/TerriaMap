import React from 'react';
import PropTypes from 'prop-types';

import MenuPanel from 'terriajs/lib/ReactViews/StandardUserInterface/customizable/MenuPanel.jsx';
import PanelStyles from 'terriajs/lib/ReactViews/Map/Panels/panel.scss';
import Styles from './related-maps.scss';
import classNames from 'classnames';

function RelatedMaps(props) {
    const dropdownTheme = {
        inner: Styles.dropdownInner,
        icon: 'gallery'
        
    };

    return (
        <MenuPanel theme={dropdownTheme}
                   btnText="Related Maps"
                   smallScreen={props.smallScreen}
                   viewState={props.viewState}
                   btnTitle="See related maps">
            <div className={classNames(PanelStyles.header)}>
                <label className={PanelStyles.heading}>Related Maps</label>
            </div>

            <p>
                Clicking on a map below will open it in a separate window or tab.
            </p>

            <div className={classNames(PanelStyles.section, Styles.section)}>
                <a target="_blank" href="http://strava.bathhacked.org/interact/">
                    <img className={Styles.image} src={require('../../wwwroot/images/metro_map.png')}
                         alt="Bath Strava Metro 2015"/>
                </a>

                <a target="_blank" className={Styles.link} href="http://strava.bathhacked.org/interact/">Bath Strava Metro 2015</a>

                <p>
                    A visualisation of Strava Metro data for the city of Bath during 2015. Created by
                    <a href="https://twitter.com/azazell0?lang=en">Mark Owen</a>.
                </p>
            </div>

            <div className={classNames(PanelStyles.section, Styles.section)}>
                <a target="_blank" href="http://nadnerb.co.uk/HistoryMap/">
                    <img className={Styles.image} src={require('../../wwwroot/images/history_map.png')}
                         alt="History Map: Bath"/>
                </a>

                <a target="_blank" className={Styles.link} href="http://nadnerb.co.uk/HistoryMap/">History Map: Bath</a>

                <p>
                    A range of historical maps of Bath ranging from 1572 to 1942. Includes the 1885 Ordnance Survey
                    map of Bath, which is the most detailed survey ever carried out. Created by
                    <a href="https://twitter.com/_nadnerb">Brendan</a>.
                </p>
            </div>

            <div className={classNames(PanelStyles.section, Styles.section)}>
                <a target="_blank" href="https://drive.google.com/open?id=1f4Ul606sRVzb8lZo883MjKcbVTY&usp=sharing">
                    <img className={Styles.image} src={require('../../wwwroot/images/historical_bath_map.png')}
                         alt="Historical Bath"/>
                </a>

                <a target="_blank" className={Styles.link} href="https://drive.google.com/open?id=1f4Ul606sRVzb8lZo883MjKcbVTY&usp=sharing">Historical Bath</a>

                <p>
                    Explore some of the history of Bath via videos, art works, printed images and old photographs. Created by
                    <a href="https://twitter.com/ldodds">Leigh Dodds</a>.
                </p>
            </div>
        </MenuPanel>
    );
}

RelatedMaps.propTypes = {
    viewState: PropTypes.object.isRequired,
    smallScreen: PropTypes.bool
};

export default RelatedMaps;