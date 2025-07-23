import { connect } from "react-redux"
import { SortByPrice, SortByYear } from "../../redux/actions"
import { stateInterface } from "../../interfaces"

interface Prop {
    name: string,
    SortByYear: Function,
    SortByPrice: Function
}

function SortMenuElement(props:Prop) {
    switch (props.name) {
        case 'YEAR':
            return (
                <div onClick={() => {
                    props.SortByYear()
                }}className="sort-menu__element">По году</div>
            )
        case 'PRICE':
            return (
                <div onClick={() => {
                    props.SortByPrice()
                }}className="sort-menu__element">По стоимости</div>
            )
        default:
            return (
                <></>
            )
    }   
}

const mapStateToProps = (store:stateInterface) => {
    return {

    }
}

const mapDispatchToProps = {
    SortByPrice, SortByYear
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuElement)