import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme/styled'
import { CssBaseline, debounce } from '@mui/material'
import { DashboardLayout } from '../component/dashboard-layout'
import { wrapper, globalStore } from '../store/app-store'
import { setBreadcrumbs, setPageName } from '../store/general-slice'
import { Provider } from 'react-redux'
import { saveState } from '../app/browser-storage'

globalStore.subscribe(
    // we use debounce to save the state once each 300ms
    // for better performances in case multiple changes occur in a short time
    debounce(() => {
        saveState(globalStore.getState());
    }, 300)
);

function MyApp({ Component, ...rest }: AppProps) {
    const { store, props } = wrapper.useWrappedStore(rest);

    return <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
            <DashboardLayout>
                <Component {...props.pageProps} />
            </DashboardLayout>
        </Provider>
    </ThemeProvider>
}

export default MyApp;