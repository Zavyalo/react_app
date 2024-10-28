export function FormCreateSet(){
    return (
        <form>
            <label>
                Название набора
                <input type="text" name="name" />
            </label>
            <label>
                Описантие 
                <textarea name="disription" />
            </label>
            <input type="submit" value="Создать сет" />
        </form>
    )
}