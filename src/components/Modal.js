import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../reducers/modalReducer';

const Modal = (props) => {
    const dispatch = useDispatch()
    const recipeRows = useSelector(state => state.recipes.recipeRows)
    const diners = useSelector(state => state.metadata.diners)
    const modalRef = useRef(null)
    const modalVisible = useSelector(state => state.modal.modalVisible)
    const recipe = useSelector(state => state.modal.modalRecipe)

    useOnClickOutside(modalRef, () => dispatch(hideModal()));

    function useOnClickOutside(ref, handler) {
        useEffect(
            () => {
                const listener = (event) => {
                    // Mikäli klikataan refe-elementtiä tai sen lapsia, ei tehdä mitään
                    if (!ref.current || ref.current.contains(event.target)) {
                        return
                    }
                    handler(event)
                }
                document.addEventListener("mousedown", listener)
                document.addEventListener("touchstart", listener)
                return () => {
                    document.removeEventListener("mousedown", listener)
                    document.removeEventListener("touchstart", listener)
                }
            },
            [ref, handler]
        )
    }

    // Kuunnellaan ESC-näppäintä ja suljetaan modaali
    const listenForEscKey = event => {
        const { keyCode } = event;

        if (keyCode === 27) {
            dispatch(hideModal())
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', listenForEscKey);

        return () => {
            window.removeEventListener('keydown', listenForEscKey);
        }
    })

    // Ei renderöidä mikäli modalVisible on false
    if (!modalVisible) {
        return null
    }

    
    // Find matching recipe rows
    const recipeRowIds = recipe.fields.RecipeRows
    const matchingRecipeRows = recipeRows.filter(row => {
        return recipeRowIds.includes(row.id)
    })

    // Render ingredients
    const ingredients = matchingRecipeRows.map(recipe => {
        return <div key={recipe.id}>{recipe.fields.Name}, {recipe.fields.AmountPerPerson * diners} {recipe.fields.Unit}</div>
    })
    

    return (
        <div className="modal">
            <div className="modalContent" ref={modalRef}>
                <span className="close" onClick={() => dispatch(hideModal())}>X</span>
                <h2>{recipe.fields.Name}</h2>
                <h3>Ingredients needed:</h3>
                {ingredients}
            </div>
        </div>
    )
}

export default Modal