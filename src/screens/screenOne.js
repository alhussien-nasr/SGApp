import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import InputCom from "../components/inputCom";
import yel from "../api/yelp";
import { ResultList } from "../components/ResultList";
import sueResults from '../hooks/useResults'
import {useResults} from "../hooks/useResults";
const ScreenOne = () => {
  const [term, setTerm] = useState("");
  // const [results, setResults] = useState([]);
  // const [error, seterror] = useState("");
  // const searchApi = async (Search) => {
  //   try {
  //     const response = await yel.get("/search", {
  //       params: {
  //         limit: 50,
  //         term: Search,
  //         location: "san jose",
  //       },
  //     });
  //     setResults(response.data.businesses);
  //   } catch (err) {
  //     seterror("oh no try again");
  //   }
  // };
  // useEffect(() => {
  //   searchApi("pasta");
  // }, []);
   const [results,error,searchApi]=useResults()
  const SearchFilter = (pric) => {
    return results.filter((result) => {
      return result.price === pric;
    });
  };
  return (
    <View>
      <InputCom term={term} onChangeTerm={setTerm} onSubmit={()=>searchApi(term)} />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <ResultList
           
          results={SearchFilter("$")}
          title={"Cost Effective"}
        />
        <ResultList
          results={SearchFilter("$$")}
          title={"Bit pricier"}
        />
        <ResultList
          results={SearchFilter("$$$")}
          title={"Big Spender"}
        />
                <ResultList
          results={SearchFilter("$$$$")}
          title={"extra Spender"}
        />

      </ScrollView>
    </View>
  );
};
export default ScreenOne;
