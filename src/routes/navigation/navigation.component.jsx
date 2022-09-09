import { Outlet, Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

const Navigation = () => {
    return(
      <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><CrownLogo className="logo" /></Link>
            {/*<a className="navbar-brand" href="/">Navbar</a>*/}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-link active" to="/auth">Sign In</Link>
                    <Link className="nav-link" to="/shop">Shop</Link>
                    
                    {/*}
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    <a className="nav-link" href="/">Features</a>
                    <a className="nav-link" href="/">Pricing</a>
                    <a className="nav-link disabled">Disabled</a>
                    */}

                </div>
          </div>
        </div>
      </nav>
      <Outlet />
      </>
    );
}

export default Navigation;