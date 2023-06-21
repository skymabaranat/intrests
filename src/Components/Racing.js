import ferrari from './images/Ferrari.jpeg'

export default function TextPic() {
    return (
        <div>
            <h1 style={{ textAlign: "left" }}>Racing</h1>
            <img src={ferrari} class="rounded float-start" alt="picture of mulan" width="40%"/>
            <div style={{ textAlign: "right"}} >
                <p style={{ textAlign: "left", padding: "0px 0px 0px 100px" }}>
                    Motorsport is probably my biggest interest. On the weekend, you probably catch me watching anything which travels over 100mph including Formula 1,2,3 and Indycar. I follow many different drivers but I won't bore you with the details. 
                </p>
            </div>
        </div>
    );
  }