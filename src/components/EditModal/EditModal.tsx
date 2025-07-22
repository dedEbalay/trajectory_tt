import { connect } from "react-redux"
import { CloseEditModal } from "../../redux/actions"
import { Post } from "../../interfaces"
import { useState } from "react";

function EditModal(props:any) {
    if (props.editModalVisibility) {
        let name = props.currentPost.name,
            price = props.currentPost.price
        return (
            <div className="edit-modal__container" id="123">
                <div className="edit-modal__overlay" />
                <div className="edit-modal">
                    <div className="edit-modal__title">Модель:
                        <input type="text" className="edit-modal__name" defaultValue={props.currentPost.name} onChange={(e):any => {
                            name = (e.target.value)                 
                        }}/>
                        <div className="edit-modal__model">{props.currentPost.model}</div>
                    </div>
                    <div className="edit-modal-info">
                        <div className="edit-modal-info__year">Год выпуска:{props.currentPost.year}</div>
                        <div className="edit-modal-info__color">Цвет:{props.currentPost.color}</div>
                        <div className="edit-modal-info__price">
                            Цена:
                            <input type="text" className="edit-modal-info__input" defaultValue={props.currentPost.price.toString()} onChange={(e):any => {
                                price = (+e.target.value)
                            }}/>
                        </div>
                    </div>
                    <button className="edit-modal__close" onClick={() => {
                        props.CloseEditModal(name, price)
                    }}>Закрыть и сохранить</button>
                </div>
            </div>
        )  
    }
    return (
        <></>
    )
}

const mapStateToProps = (store:any) => {
    return {
        editModalVisibility: store.editModalVisibility,
        currentPost: store.currentPost
    }
}

const mapDispatchToProps = {
    CloseEditModal
}

export default connect(mapStateToProps, mapDispatchToProps)(EditModal)