import { Map, Placemark } from "@pbe/react-yandex-maps"
import { connect } from "react-redux"
import { Post, stateInterface } from "../../interfaces"

interface Prop {
    posts: Post[]
}

function Maps(props:Prop) {

    return (
        <div className="map-container">
            <Map width={'100%'} height={'500px'} defaultState={{center: [59.950317, 30.31799], zoom: 8}}>
                {props.posts.map((item:Post) => {
                    console.log('Поставлена точка', item.id, item.latitude, item.longitude);
                    
                    return (
                        <Placemark key={item.id} geometry={[item.latitude, item.longitude]}/>
                    )
                })}
            </Map>
        </div>
    )
}

const mapStateToProps = (store:stateInterface) => {
    return {
        posts: store.posts
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Maps)