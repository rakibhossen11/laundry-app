import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

const DressItem = () =>{

    return(
        <View>
            <Pressable>
                <View>
                    <Image />
                </View>
                <View>
                    <Text>name</Text>
                    <Text>price</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default DressItem;