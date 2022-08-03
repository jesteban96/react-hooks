export const Quote = ({quote,author}) => {
    return (
        <blockquote className="blockquote text-end">
            <p className="bm-1">{quote}</p>
            <footer className="blockquote-footer">{author}</footer>
        </blockquote>
    )
}
