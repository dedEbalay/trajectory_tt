import { connect } from "react-redux"
import { DeleteElement, OpenEditModal } from "../../redux/actions"

function CarCard (props:any) {
    return (
        <div className="card-container">
            <div className="card-container__title">Модель:{props.name} {props.model}</div>
            <div className="card-container__edit" onClick={() => {
                props.OpenEditModal(props.id)
            }}>Редактировать</div>
            <div className="card-container__delete" onClick={() => {
                props.DeleteElement(props.id)
            }}>Удалить карточку</div>
            <div className="card-info">
                <div className="card-info__year">Год выпуска:{props.year}</div>
                <div className="card-info__color">Цвет автомобиля: {props.color}</div>
                <div className="card-info__price">Цена:{props.price} тугриков</div>
            </div>
        </div>
    )
}

const mapStateToProps = (store:any) => {
    return {
    }
}

const mapDispatchToProps = {
    OpenEditModal, DeleteElement
}

export default connect(mapStateToProps, mapDispatchToProps)(CarCard)