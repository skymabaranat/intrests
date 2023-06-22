import Spiderman from './images/spider.jpeg'
import Batman from './images/batman.jpeg'
import Purple from './images/purple.jpeg'

export default function Cards() {
    return (
        <div class="row row-cols-1 row-cols-md-3 g-4" style={{padding:"20px 50px"}}>
        <div class="col">
            <div class="card h-100">
            <img src={Spiderman} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">#1 Animated Movie</h5>
                <p class="card-text">Spiderman into the Spiderverse</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={Purple} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">#1 Colour</h5>
                <p class="card-text">Purple</p>
            </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
            <img src={Batman} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">#1 Superhero</h5>
                <p class="card-text">Batman</p>
            </div>
            </div>
        </div>
        </div>
    );
}