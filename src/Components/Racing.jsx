import ferrari from './images/Ferrari.jpeg'
import './Racing.css'

export default function TextPic(props) {
    return (
        <div>
            <h1 style={{ textAlign: "left", marginLeft:75}}>{props.title}</h1>
            <div style={{display: 'flex'}}>
                <div class="App-logo" style={{marginLeft: 50}}>
                    <img src={props.image} alt="picture of a car" width="500vh"/>
                </div>
                <div style={{padding: 50, display: 'inline-block'}} >
                    <p style={{ textAlign: "right"}}>
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    );
  }