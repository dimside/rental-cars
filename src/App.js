import { Route, Routes } from 'react-router-dom';

import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path='catalog' element={ <div>qqqqqqqqqqqqqq</div> } />
        <Route path='favorites' element={ <div>aaaaaaaaaaaaa</div> } />
        <Route path='*' element={ <div>adscasdc</div> } />
      </Route>
    </Routes>
  );
};

export default App;
