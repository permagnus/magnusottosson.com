import React from 'react'
import Head from 'next/head'
import cx from 'classnames'
import '../styles/_globals.scss'
import layout from '../styles/layout.scss'
import logo from '../styles/logo.scss'
import paragraph from '../styles/paragraph.scss'
import link from '../styles/link.scss'
import header from '../styles/header.scss'

export const config = { amp: 'hybrid' }

const Index = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"/>
                <title>Magnus Ottosson - Technical Director | Team Lead | Sr Developer & Advisor | Creative | Angel
                    Investor</title>
                <meta name="Description" content="I have dedicated my entire professional and personal life developing myself into not only to become the
                best possible software developer I can be, but also being one step ahead of the curve at all times."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link type="text/plain" rel="author" href="/humans.txt" />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato:300,700|Playfair+Display:400i|Raleway:800&display=swap"
                    rel="stylesheet"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/static/favicons/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/static/favicons/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/static/favicons/favicon-16x16.png"/>
                <link rel="manifest" href="/static/favicons/site.webmanifest"/>
                <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5"/>
                <link rel="shortcut icon" href="/static/favicons/favicon.ico"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                <meta name="msapplication-config" content="/static/favicons/browserconfig.xml"/>
                <meta name="theme-color" content="#ffffff"/>
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-72173513-1" />
                <script dangerouslySetInnerHTML={{__html: `window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'UA-72173513-1');`}} />
            </Head>
            <header className={cx(layout.container, layout.spacing, header.default)}>
                <h1 className={logo.default}>
                    I'm
                    <strong className={logo.name}>
                        Magnus
                        <br/>
                        Ottosson
                    </strong>
                    - A Senior Software Developer &amp; Creative
                </h1>
            </header>
            <p className={cx(layout.container, layout.spacing, layout.center, paragraph.default)}>
                I have dedicated my entire professional and personal life developing myself into not only to become the
                best possible software developer I can be, but also being one step ahead of the curve at all times.
            </p>
            <p className={cx(layout.container, layout.spacing, layout.center, paragraph.default)}>
                Drop me a line at <a className={link.default}
                                     href="mailto:magnus@magnusottosson.com">magnus@magnusottosson.com</a>, check
                my{' '}
                <a className={link.default} href="https://se.linkedin.com/in/magnusottosson">linkedin</a>, or download
                my{' '}
                <a className={link.default} href="/static/resume/magnus-ottosson.pdf">resume</a>.
            </p>
        </>
    )
}

export default Index
