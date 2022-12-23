import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url'
import client from '../../sanity/client';
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

const PostBody = ({ body }) => {
    const customComponents = {
        marks: {
            superscript: ({ children }) => {
                return (<span> <sup>  {children} </sup></span>)
            },
            subscript: ({ children }) => {
                return (<span> <sub>  {children} </sub></span>)
            },
        },
        types: {
            image: ({ value }) => { return <img src={imageUrlBuilder(client).image(value)} /> },
            "video": ({ value }) => {
                const url = value.url
                const id = getYouTubeId(url)
                return (<YouTube videoId={id} />)
            },
            

        },

    }

    return (
        <div className="mt-32 px-4 sm:px-12 lg:px-32">
            <PortableText components={customComponents} value={body} />

        </div>
    )
}

export default PostBody;