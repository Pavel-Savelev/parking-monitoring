import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { StationCard } from '../../pages/Station/Station';
import { Events } from '../../pages/Event/Events';
import { AddStation } from '../../pages/AddStation/AddStation';

export const AppRouter = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='events' element={<Events />} />
    <Route path='/station/:id' element={<StationCard />} />
    <Route path='/station/:id/:event_id' element={<StationCard />} />
    <Route path='/add-station' element={<AddStation />} />
  </Routes>
);

export default AppRouter;
