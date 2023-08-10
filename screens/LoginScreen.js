import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { KeyboardAvoidingView, Pressable, TextInput } from "react-native";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";


const LoginScreen = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigation = useNavigation();

    return(
        <SafeAreaView
            style={{flex: 1, alignItems: "center", backgroundColor: "white", padding: 10}}
        >
            <View>
                <Text>Loading</Text>
                <ActivityIndicator size={"large"} color={"red"} />
            </View>
            <KeyboardAvoidingView>
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 100
                }}>
                    <Text style={{fontSize: 20, color: "#662d91", fontWeight: "bold"}}>Sign in</Text>
                    <Text style={{fontSize: 18, fontWeight: "600", marginTop: 8}}>Sign in to your account</Text>
                </View>


                {/* form */}
                <View>
                    {/* email field */}
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <MaterialCommunityIcons name="email-outline" size={24} color={"black"} />
                        <TextInput
                            placeholder="Email"
                            placeholderTextColor="black"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            style={{
                                fontSize: email ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                                marginLeft: 30,
                                width: 300,
                                marginVertical: 10
                            }}
                        />
                    </View>
                    {/* password field */}
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Ionicons name="key-outline" size={24} color="black" />
                        <TextInput
                            value={password}
                            placeholder="Password"
                            secureTextEntry={true}
                            placeholderTextColor="black"
                            onChangeText={(text) => setPassword(text)}
                            style={{
                                fontSize: password ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                                marginLeft: 30,
                                width: 300,
                                marginVertical: 20
                            }}
                        />
                    </View>
                    {/* pressable login btn */}
                    <Pressable
                    style={{
                        width: 200,
                        backgroundColor: "#318CE7",
                        padding: 15,
                        borderRadius: 7,
                        marginTop: 50,
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                    >
                        <Text style={{fontSize: 18, textAlign: "center", color: "white"}}>login</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("Register")} style={{marginTop: 20}}>
                        <Text style={{fontSize: 17, color: "gray", fontWeight: "500",textAlign: "center"}}>Don't have an account? SignUp</Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen;