import React from 'react';
// import {StyleSheet, Text, View, ImageBackground,} from 'react-native';
// import StyleSheet from 'react-native';
import Text from 'react-native';
import View from 'react-native';
import ImageBackground from 'react-native';
import {BR,B,} from 'react-native';

export default function App() {
    return (
        <ImageBackground resizeMode="cover"
            style={
                {
                    width: "100%",
                    height: "100%"
                }
            }
            source={
                require('./bg.jpg')
        }>
            <View style={
                {
                    "border-bottom": "10px solid #EB9486",
                    "border-top": "10px solid #EB9486",
                    //  "backgroundColor": "#7C5869",
                    "Width": "100%",
                    "height": "100%",
                    "text-align": "center",
                    "padding-top": "40%"
                }
            }>
                <Text style={
                    {
                        "color": "#EB9486",
                        "text-shadow": "0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc, 0 0 50px #cccccc",
                        "fontSize": "15vw",
                        "-webkit-text-stroke": "2px black"
                    }
                }>
                    <B>HöPPA</B>
                    <br/>
                    <br/> {/* <img style={{
                   "display":"block",
                   right:"",
          "display":"block",
          "margin":"auto",
          "margin-top":"50px",
          }} width="auto" height ="100vh"
           src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Down_the_Rabbit_Hole.png"/>  */} </Text>


                <View style={
                    {
                        "bottom": "0",
                        "position": "absolute"
                    }
                }>
                    <Text style={
                        {
                            "padding": "25px",
                            "justifyContent": "center",
                            "fontSize": "6vW",
                            "color": "#dddddd",
                            "text-shadow": "0px 0px 10px black,0px 0px 10px black,0px 0px 10px black"

                        }
                    }>
                        <B> {/* Bottom stuff */}
                            Jump rope activity can be traced back to 1600 A.D. when the Egyptians used
                                                vines for jumping.</B>
                    </Text>
                    <br/>
                    <br/>
                    <br/> {/* <p style={
                    {

                        "fontSize": "10vw",
                        "color": "#000000",
                        // "-webkit-text-stroke":"1px black",

                    }

                }>
                    <B>**********</B>
                </p> */}
                    <Text style={
                        {
                            "justifyContent": "center",
                            "fontSize": "5vW",
                            "color": "#dddddd"
                        }
                    }>
                        &copy;
                        <B>2021 Team HOPPA.</B>
                        <br/>
                    </Text>
                    <br/>
                </View>
            </View>
        </ImageBackground>

    );
}
