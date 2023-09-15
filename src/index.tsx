import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary, ThemeProvider, StoreProvider } from './app/providers';
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>

        </BrowserRouter>

    </StoreProvider>,
    document.getElementById('root'),
);
