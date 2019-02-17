import React from 'react';
import ReactHighcharts from 'react-highcharts';
import {AppContext} from '../App/AppProvider';
import {Tile} from '../Shared/Tile';
import HighchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
import ChartSelect from './ChartSelect';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function () {
  return (
    <AppContext.Consumer>
      {({historical, changeChartSelect}) => 
      <Tile id="priceChart">
        <ChartSelect
          defaultValue="months"
          onChange={e => changeChartSelect(e.target.value)}
        >
          <option value="days">Days</option>
          <option value="weeks">Weeks</option>
          <option value="months">Months</option>
        </ChartSelect>
        {historical ?
          <ReactHighcharts config={HighchartsConfig(historical)} />
          : <div>Loading Historical Data...</div>
        }
      </Tile>
      }
    </AppContext.Consumer>
  )
};
