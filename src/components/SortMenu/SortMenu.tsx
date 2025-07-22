import { connect } from "react-redux"
import SortMenuElement from "../SortMenuElement/SortMenuElement"

function SortMenu(props:any) {
    let i = 0
    if (props.menuVisibility) {
        return (
            <div className="sort-menu">
                {props.sortList.map((item:any) => {
                    return (
                        <SortMenuElement key={i++} name={item}/>
                    )
                })}
            </div>
        )
    }
    return (
        <></>
    )
}

const mapStateToProps = (store:any) => {
    return {
        menuVisibility: store.sortMenuVisibility,
        sortList: store.sortList
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)