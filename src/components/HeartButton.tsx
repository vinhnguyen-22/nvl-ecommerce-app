'use client'

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface HeartButtonProps {
    listingId: string;
}

const HeartButton: React.FC<HeartButtonProps> = ({
    listingId: string
}) => {
    const hasFavored = true;
    const toggleFavorite = () =>{};
    return ( 
        <div
        onClick={toggleFavorite}
        className="
        relative
        hove:opacity-80
        transition
        cursor-pointer
        "
        >
            <AiOutlineHeart
                size={28}
                className="
                fill-white
                absolute
                -top-[2px]
                -right-[2px]
                "
            />
            <AiFillHeart
                size={24}
                className={
                    hasFavored ? 'fill-rose-500' : 'fill-neutral-500/70'
                }
            />
        </div>
     );
}
 
export default HeartButton;