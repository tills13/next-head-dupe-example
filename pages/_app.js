import Head from 'next/head'
import { useEffect } from 'react';

function initFacebookPixel() {
    (function (f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function () {
            n.callMethod
                ? n.callMethod.apply(n, arguments)
                : n.queue.push(arguments);
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = "2.0";
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
    })(
        window,
        document,
        "script",
        "https://connect.facebook.net/en_US/fbevents.js",
    );

    // ... etc
}

export default function App({ Component, pageProps  }) {
    useEffect(() => {
        initFacebookPixel()
    }, [])

    return (
        <>
            <Head>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react/18.0.0-beta-149b420f6-20211119/umd/react.production.min.js" />
            </Head>

            <Component {...pageProps}/>
        </>
    )
}