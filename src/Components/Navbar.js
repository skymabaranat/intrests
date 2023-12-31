import { Outlet, Link } from "react-router-dom";

export default function Navbar(){
    return(
        <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark">
    <div class="container-fluid bg-dark">
        <a class="navbar-brand" style={{color: "white", paddingLeft: "530px"}}  href="#">Ariana's and Harkiran's Website<span style={{fontWeight: 'bold'}}> ft. Trevin</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        </div>
    </div>
    </nav>
    <Outlet />
        </>
    );
}
