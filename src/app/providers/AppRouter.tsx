import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { StationCard } from '../../pages/Station/Station';
import { Events } from '../../pages/Event/Events';
import { AddStation } from '../../pages/AddStation/AddStation';
import { Login } from '../../pages/Login/Login';
import { Registration } from '../../pages/Registaration/Registartion';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='events' element={<Events />} />
    <Route path='/station/:id' element={<StationCard />} />
    <Route path='/station/:id/:event_id' element={<StationCard />} />
    <Route path='/add-station' element={<AddStation />} />
    <Route path='/login' element={<Login />} />
    <Route path='/registration' element={<Registration />} />
  </Routes>
);

export default AppRouter;
