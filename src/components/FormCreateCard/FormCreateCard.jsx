import {useForm} from "react-hook-form";
import './FormCreateCard.css';

export function FormCreateCard(){
    const {register, handleSubmit, formState : {errors}} = useForm({defaultValues:{
        front: '',
        back: ''
    }});
    return (
        <form onSubmit={handleSubmit((data)=>{
            console.log(data)
        })}>
            <div className="form__item">
            <label htmlFor="front"> Передняя сторона карточки: </label>
            <input
                    type="text"
                    name="front"
                    id="front"
                    {...register('front', {
                        required:'Заполните переднюю сторону карточки', 
                        minLength: {
                            value:1, 
                            message: 'Карточка должна содержать минимум 1 символ'
                        }
                    })}
            />
            <p className='erorr-msg'>{errors.front?.message}</p>
            </div>


            <div className="form__item">
            <label htmlFor="back"> Передняя сторона карточки: </label>
            <input
                    type="text"
                    name="back"
                    id="back"
                    {...register('back', {
                        required:'Заполните заднюю сторону карточки', 
                        minLength: {
                            value:1, 
                            message: 'Карточка должна содержать минимум 1 символ'
                        }
                    })}
            />
            <p className='erorr-msg'>{errors.back?.message}</p>
            </div>

            <div className="form__item">
                <input type="submit"
                    value="Создать карточку"
                    onClick={handleSubmit}
                />
            </div>
        </form>
    )
}