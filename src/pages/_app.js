import { Provider } from 'react-redux';
import { store } from '@store/index';
import { Toaster } from 'react-stacked-toast';

import Modal from 'react-modal';

import '@styles/global.scss';

function App({ Component, pageProps }) {
    Modal.setAppElement('#__next');
    const getLayout = Component.getLayout || (page => page);
    return (
        <Provider store={store}>
            {getLayout(
                <>
                    <Component {...pageProps} />
                    <Toaster/>
                </>
            )}
        </Provider>
    );
}

export default App;