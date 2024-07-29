
import Auth from '../utils/auth'

const Home = () => {


  return (
    <main>
      <div className="flex-row justify-center">
      {Auth.loggedIn() ? (
        <div>Logged IN</div>
      ) : (
        <div>Logged OUT</div>
      )
    }
      </div>
    </main>
  );
};

export default Home;
