import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ErrorBoundary, ThemeProvider } from './app/providers';
import './shared/config/i18n/i18n';
import { render } from 'react-dom';
import 'app/styles/index.scss';

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>

    </BrowserRouter>,
    document.getElementById('root'),
);
