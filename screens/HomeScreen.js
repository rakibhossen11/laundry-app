import { Feather, MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import Carosel from "../components/Carosel";
import Services from "../components/Services";

export default function HomeScreen(){
    return(
        <>
            <ScrollView>
                {/* location and profile */}
                <View style={{flexDirection: 'row', alignItems: "center", padding: 10}}>
                    <MaterialIcons name="location-on" size={30} color={'#fd5c63'} />
                    <View>
                        <Text style={{fontSize: 18, fontWeight: '600' }}>Home</Text>
                        <Text>Hobirbari bhaluka mymensingh</Text>
                    </View>
                    {/* TO DO onpress fuunction */}
                    <Pressable style={{marginLeft: "auto", marginRight: 7}}>
                        <Image
                            style={{width: 40, height: 40, borderRadius: 20}}
                            source={{uri: "https://lh3.googleusercontent.com/ogw/AAEL6sh_yqHq38z35QMy5Fnb8ZIxicdxCIVM9PeBD2j-=s64-c-mo"}}
                        />
                    </Pressable>
                </View>

                {/* Search bar */}
                <View
                style={{
                    padding: 10,
                    margin: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderWidth: 0.8,
                    borderColor: "#C0C0C0",
                    borderRadius: 7,
                }}
                >
                    <TextInput placeholder="search for item or more"/>
                    <Feather name="search" size={24} color={"#fd5c63"}/>
                </View>
                {/* Image carosel */}
                <Carosel />
                {/* services component */}
                <Services />
                {/* Render all the products */}
            </ScrollView>
        </>
    )
}