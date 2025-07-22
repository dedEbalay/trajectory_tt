import { connect } from "react-redux"
import { SortByPrice, SortByYear } from "../../redux/actions"

function SortMenuElement(props:any) {
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

const mapStateToProps = (store:any) => {
    return {

    }
}

const mapDispatchToProps = {
    SortByPrice, SortByYear
}

export default connect(mapStateToProps, mapDispatchToProps)(SortMenuElement)