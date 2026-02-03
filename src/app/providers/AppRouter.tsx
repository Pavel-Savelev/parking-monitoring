import { Routes, Route } from 'react-router-dom';
import { StationsPage } from '@pages/StationsPage';
import { StationPage } from '../../pages/Station/Station';
import { EventsPage } from '@pages//EventsPage/EventsPage';
import { AddStation } from '../../pages/AddStation/AddStation';
import { Login } from '../../pages/Login/Login';
import { Registration } from '../../pages/Registaration/Registartion';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<StationsPage />} />
    <Route path='events' element={<EventsPage />} />
    <Route path='/station/:id' element={<StationPage />} />
    <Route path='/station/:id/:event_id' element={<StationPage />} />
    <Route path='/add-station' element={<AddStation />} />
    <Route path='/login' element={<Login />} />
    <Route path='/registration' element={<Registration />} />
  </Routes>
);

export default AppRouter;
