import { useState , useEffect} from "react";
import yel from '../api/yelp'
export const useResults= ()=>{
    const [results, setResults] = useState([]);
    const [error, seterror] = useState("");
    const searchApi = async (Search) => {
      try {
        const response = await yel.get("/search", {
          params: {
            limit: 50,
            term: Search,
            location: "san jose",
          },
        });
        setResults(response.data.businesses);
      } catch (err) {
        seterror("oh no try again");
      }
    };
    useEffect(() => {
      searchApi("pasta");
    }, []);
    return[results,error,searchApi]
}