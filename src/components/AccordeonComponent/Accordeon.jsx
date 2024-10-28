import style from './Accordeon.module.css'
import { AccordeonItem } from './AccordeonItem/AccordeonItem'


export function Accordeon() {
    return (
        <>
            <div className={style.accordeon}>
                <AccordeonItem title='О нас' text='gfjdkg' />
                <AccordeonItem title='Контакты' text='dvbjb' />
                <AccordeonItem title='О вас' text='sgmnbvlj' />
            </div>
        </>
    )
}