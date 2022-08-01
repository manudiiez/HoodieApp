import { useState } from 'react';
import ItemFilter from './ItemFilter'

const ItemFilterContainer = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <ItemFilter click={click} handleClick={handleClick}/>
    )
}

export default ItemFilterContainer