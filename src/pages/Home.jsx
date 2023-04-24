import heroImage from '../images/hero.jpg';

const Home = () => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>
        Wellcome dear user!
      </h1>
      <img src={heroImage} alt="hero" style={{ margin: '0 auto' }} />
    </div>
  );
};

export default Home;
