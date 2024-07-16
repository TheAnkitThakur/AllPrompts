import '@styles/global.css';
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { title } from 'process';
import { Children } from 'react';


export const metadata = {
    title: "AllPrompt",
    description: 'Discover all the popular AI prompts'
}

const Rootlayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
            <div className='main'>
                <div className="gradient"/>
            </div>
            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>

        </body>
    </html>
  )
}

export default Rootlayout;
