import React from 'react';
import Nav from '../composant/nav';
import "./index.css";
import FeaturesComponent from '../composant/features';
import Footer from '../composant/footer';
 function Index() {
  return (
    <>
      <Nav />
      <main>
  <div className='hero' style={{ backgroundImage: 'url(./img/bank-tree.webp)', }}>
    <section className='hero-content'>
    <p className="subtitle">No fees.</p>
    <p className="subtitle">No minimum deposit.</p>
    <p className="subtitle">High interest rates.</p>
    <p className="text">Open a savings account with Argent Bank today!</p>
    </section>
  </div>
  <FeaturesComponent />
</main>
  <Footer />

    </>
  );
}

export default Index ;