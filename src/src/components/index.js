import { ThemeProvider } from 'styled-components';
import { datalimentaire, Style }  from '../utils/styles';
import MapContainer from './map';
import PanelControl from './panel';

export default function Front() {

  return (
    <>
         <Style/>
        <MapContainer />
        <PanelControl/>
    </>

  );
}