import css from '../ErrorMessage/ErrorMessage.module.css'

export default function ErrorMessage() {
    return (
        <div className={css.errorMessageContainer}>
            <p className={css.errorItem}>Oops, something went wrong. Please reload the page!</p>
        </div>
    )
}