import { GlobalStyle } from '@/styles/GlobalStyles'
import type { AppProps } from 'next/app'


GlobalStyle()
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
