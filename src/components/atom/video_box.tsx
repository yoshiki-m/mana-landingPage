import { AspectRatio } from '@chakra-ui/react'
import {useEventTracking} from "./useTracking"

type Props = {
    title: string,
    src: string
}

export default function CallToVideoBox(props: Props) {
    useEventTracking(`${props.title}_movie_played`)
    return (
        <AspectRatio
            minW={'full'}
            boxShadow={'2xl'}>
            <iframe
                title={props.title}
                src={props.src}
                onClick={useEventTracking(`${props.title}_movie_played`)}
                allowFullScreen
            />
        </AspectRatio>
    );
}
