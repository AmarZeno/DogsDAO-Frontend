import Head from 'next/head'
import styles from '../styles/Layout.module.css'

const Layout = (props) => (
  <>
    <Head>
        <title>DogsDAO</title>
        <meta name='description' content='NFT Attached to your dog' />
        <link rel='icon' href='/favicon.ico' >
          <a href='https://www.flaticon.com/free-icons/dog' title='dog icons'/>
        </link>
    </Head>

    <main>
      <div className={styles.container}>{props.children}</div>
    </main>

    <footer>
      DOGS DAO. All rights reserved. 2022.
    </footer>

    <style jsx global>{`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        color: #333;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
          'Helvetica Neue', Arial, Noto Sans, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 2rem 1.25rem;
      }
      footer {
        width: 100%;
        height: 100px;
        border-top: 1px solid #eaeaea;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </>
)

export default Layout