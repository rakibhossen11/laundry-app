import { Pressable, SafeAreaView, Text } from "react-native";

const ProfileScreen = () =>{
    return(
        <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Pressable style={{marginVertical: 10}}>
                <Text>Welcome</Text>
            </Pressable>
            <Pressable>
                <Text>Sign out</Text>
            </Pressable>
        </SafeAreaView>
    )
}

export default ProfileScreen;