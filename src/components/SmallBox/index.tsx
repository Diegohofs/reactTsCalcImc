import { Box } from "./styles";
import { ThumbsDown, ThumbsUp } from "phosphor-react"

import { Level } from '../../helpers/imc'

type Props = {
    item: Level
}

export function SmallBox({ item }: Props) {
    return (
        <Box color={item.color}>
            <div>
                {item.icon === 'up' ? <ThumbsUp size={32} /> : <ThumbsDown size={32} />}
            </div>
            <h3>{item.title}</h3>
            <span>
                O IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </span>
        </Box>
    )
}