import { useCounter,useFetch } from "../hooks";
import { LoadingQuote,Quote } from "./";



export const MultipleCustomHooks = () => {

    const {increment,counter} = useCounter(1);

    const {data,isLoading,hasError}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const {quote,author} = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                isLoading
                    ?<LoadingQuote/>
                    :<Quote quote={quote} author={author}></Quote>
            }


            <button 
                onClick={()=>increment()} 
                className="btn btn-secondary"
                disabled={isLoading}
            >
                Next Quote
            </button>
        </>
    )
}
