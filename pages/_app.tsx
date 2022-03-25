import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/Globalstyles';
import Navbar from './../layout/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<GlobalStyle />
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp
