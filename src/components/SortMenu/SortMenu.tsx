import { connect } from "react-redux"
import SortMenuElement from "../SortMenuElement/SortMenuElement"
import { stateInterface } from "../../interfaces"

interface Prop {
    menuVisibility: boolean,
    sortList: string[]
}

function SortMenu(props:Prop) {
    let i = 0
    if (props.menuVisibility) {
        return (
            <div className="sort-menu">
                {props.sortList.map((item:string) => {
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

const mapStateToProps = (store:stateInterface) => {
    return {
        menuVisibility: store.sortMenuVisibility,
        sortList: store.sortList
    }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenu)