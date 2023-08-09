import { MaterialIcons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

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
            </ScrollView>
        </>
    )
}