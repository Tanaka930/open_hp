import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      {/* <div className="container "> */}
        <Header />
        <main> 
          {children}
        </main>
        <Footer />
      {/* </div> */}
    </>
  )
}
