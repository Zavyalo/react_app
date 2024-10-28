export function FormCreateCard(){
    return (
        <form>
            <label>
                Передняя сторона карточки:
                <input type="text" name="fronttaxt" />
            </label>
            <label>
                Задняя сторона карточки:
                <input type="text" name="backtaxt" />
            </label>
            <input type="submit" value="Создать карточку" />
        </form>
    )
}