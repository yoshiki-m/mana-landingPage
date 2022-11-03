import { AspectRatio } from '@chakra-ui/react'

type Props = {
    title: string,
    src: string
}

export default function CallToVideoBox(props: Props) {
    return (
        <AspectRatio
            minW={'full'}
            boxShadow={'2xl'}>
            <iframe
                title={props.title}
                src={props.src}
                allowFullScreen
            />
        </AspectRatio>
    );
}
