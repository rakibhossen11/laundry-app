import { useNavigation } from "@react-navigation/native";
import { Pressable, SafeAreaView, Text } from "react-native";

const ProfileScreen = () =>{
    const navigation = useNavigation();
    const Login = () =>{
        navigation.navigate("Login");
    }

    return(
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Pressable style={{marginVertical: 10}}>
                <Text>Welcome</Text>
            </Pressable>
            <Pressable onPress={Login}>
                <Text>Sign out</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen;