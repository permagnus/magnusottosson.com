import React from 'react'
import Head from 'next/head'
import '../styles/_globals.scss'

const Default = ({ children }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css?family=Lato:300|Playfair+Display:400i|Raleway:800&display=swap" rel="stylesheet" />
            </Head>
            { children }
        </>
    )
}

export default Default

    /*
<link href='https://fonts.googleapis.com/css?family=Lato:400,300,100,100italic,300italic,400italic,700,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Lora:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic,700italic,900,900italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Raleway:400,300,100,200,500,900,800,700,600' rel='stylesheet' type='text/css'>
	*/
