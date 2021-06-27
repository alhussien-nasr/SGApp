import React , {useState , useEffect} from "react";
import { View, Text ,FlatList, Image} from "react-native";
import yel from '../api/yelp'
export const Details = ({route}) => {
  const {id}=route.params
  const [results, setResults] = useState(null);
  const [error, seterror] = useState("");
  const searchApi = async (id) => {
    try {
      const response = await yel.get(`/${id}`, {
        params: {
          limit: 50,
          location: "san jose",
        },
      });
      // console.log(response.data)
      setResults(response.data);
    } catch (err) {
      seterror("oh no try again");
    }
  };
  useEffect(()=>{searchApi(id)},[])
  console.log(results)
console.log(id)

  if(!results){return null}

  return (
    <View>
      <Text style={{fontSize:30 , fontWeight:'bold' , alignSelf:'center'}} >{results.name}</Text>
      <FlatList data={results.photos} renderItem={({item})=>{
       return <Image source={{uri:item}} style={{width:'100%',height:200 , marginVertical:10}} resizeMode='stretch' />
      }}/>
    </View>
  );
};
