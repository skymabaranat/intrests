import mulan from './images/Mulan.png'
import style from './images/1989.jpeg'
import friends from './images/Friends.jpeg'

export default function Carousel() {
    return (
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={mulan} class="d-block w-100" alt="picture of mulan"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>#1 Animated Movie</h5>
            <p>Mulan</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={style} class="d-block w-100" alt="picture of taylor swift album"/>
          <div class="carousel-caption d-none d-md-block">
            <h5 style={{ color: 'black' }}>#1 Song</h5>
            <p style={{ color: 'black' }}>Style</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={friends} class="d-block w-100" alt="picture of friends tv show"/>
          <div class="carousel-caption d-none d-md-block">
            <h5>#1 Series</h5>
            <p>Friends</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    );
  }
  