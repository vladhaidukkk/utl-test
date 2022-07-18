import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Routing } from 'pages';

import { AppPreparation } from './preparation';
import { withProviders } from './providers';

import './index.css';

const App = () => {
  return (
    <div className="h-screen w-screen bg-slate-50">
      <AppPreparation />
      <Routing />
      <ToastContainer />
    </div>
  );
};

export default withProviders(App);
