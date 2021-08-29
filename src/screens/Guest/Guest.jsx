import React, {useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './Guest.style'

const Guest = (props) => {

    const [adults, setAdults] = useState(0)

    return (
        <View>
            <View style={styles.row}>
                <View>
                    <Text style={styles.name}>Adults</Text>
                    <Text style={styles.age}>Age 24 or above</Text>
                </View>
                <View style={styles.containerButton}>
                    <Pressable
                        style={styles.button} 
                        onPress={() => setAdults(adults - 1)}  
                          
                    >
                    <Text style={styles.textBtn}>-</Text>
                    </Pressable>
                    <Text style={styles.number}>{adults}</Text>

                    <Pressable
                        style={styles.button} 
                        onPress={() => setAdults(adults + 1)}
                    >
                        <Text style={styles.textBtn}>+</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default Guest
