import { Text, View } from "react-native";
import { Link } from 'expo-router';
import tw from 'twrnc'

export default function Page(){
    return(
        <View style={tw`flex-auto justify-center items-center h-screen`}>
            <Text>Hello World</Text>
            <Link href="/bye">Bye</Link>
        </View>
    )
}