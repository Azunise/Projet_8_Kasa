//import background from "../../assets/Background.jpg"

function Banner(props) {
    return (
        <div style={{backgroundImage:`url(${props.cover})`}} className="banner">
            <div class="banner__darken"></div>
            <span class="banner__txt">{props.title}</span>
            
        </div>
    )
}

export default Banner