import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Entypo } from 'react-native-vector-icons';

const HomeScreen = () => {
    return (
        <View style={styles.page}>
            {/* <Text>Hello </Text> */}

            <View style={styles.root}>

            <Image style={styles.image} source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL.jpg"}}/>






            <View style={styles.rightContainer}>
                <Text styles={styles.title} numberOfLines={4}>Logitech MX Master 3 Advanced Wireless Mouse for Mac - Bluetooth</Text>



                <View style={styles.ratingsContainer}>

                {/* <Entypo  name={"menu"}  color="grey"/>   */}
                <Image style={styles.image} source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"}}/>


                    

                    


                </View>


                <Text styles={styles.price}>from $13.57</Text>


            </View>

            
        </View>


        

        
        </View>

        
    );
};



const styles = StyleSheet.create({

    page: {
        // flex: 1,
        width: '100%',
        padding: 15,

    },


    root: {

        flexDirection: 'row',
        margin: 15,
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderRadius: 16,
        // position: 'absolue',
        backgroundColor: "#fff",
        width: '100%',
        
        // flex: 1,

    },

    image: {
        flex: 2,
        width: 150,
        height: 150,
        resizeMode: "cover",
        
         
    },

    icon: {
        height: 20,
        width: 20,
    },

    title: {
        // width: '100%',
        fontSize: 18,
        fontWeight: "bold",
    },


    price: {
        fontSize: 18,
        fontWeight: "bold",
    },

    rightContainer: {
        padding: 10,
        width: '100%',
        flex: 2,
        
    
    
      },




});

export default HomeScreen;
