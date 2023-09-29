import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import store from "../redux/store";
import { useEffect } from "react";
import { fetchAllOffers } from "@/redux/libraryPhukeSlice";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    store.dispatch(fetchAllOffers());
  }, []);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
