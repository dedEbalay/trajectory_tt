import { connect } from "react-redux"
import CarCard from "../CarCard/CarCard"
import { Post, stateInterface } from "../../interfaces"
import SortMenu from "../SortMenu/SortMenu"
import { ToggleSortMenuVisibility } from "../../redux/actions"
interface Prop {
    loadedCars: Post[],
    sorting: string,
    ToggleSortMenuVisibility: Function
}

function CarList(props:Prop) {
    const {loadedCars, sorting} = props
    let sortType:string;
    switch (sorting) {
        case 'default':
            sortType = '...'
            break
        case 'price':
            sortType = 'стоимости'
            break
        case 'year':
            sortType = 'году выпуска'
            break
        default:
            sortType = ''
    }
    return (
        <>
            <div className="list-container">
            <button className="list-container__sort" onClick={() => {
                props.ToggleSortMenuVisibility()
            }}>Сортировка по {sortType}
            <SortMenu /></button>
                <h3 className="list-container__title">Список моделей:</h3>
                {loadedCars.map((item: Post) => {
                    return (
                        <CarCard key={item.id} {...item}></CarCard>
                    )
                })}
            </div>
        </>
    )
}

const mapStateToProps = (store:stateInterface) => {
    return {
        loadedCars: store.posts,
        sorting: store.currentSorting
    }
}

const mapDispatchToProps = {
    ToggleSortMenuVisibility
}

export default connect(mapStateToProps, mapDispatchToProps)(CarList)