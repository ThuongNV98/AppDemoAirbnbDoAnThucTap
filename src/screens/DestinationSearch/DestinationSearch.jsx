import React, {useState} from 'react'
import { View, Text, TextInput, FlatList } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import styles from './DestinationSearch.style'
import search from '../../assets/data/search'

const DestinationSearch = (props) => {

    const [inputSearch, setInputSearch] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput} 
                placeholder="Where are you going?"
                value={inputSearch}
                onChangeText={setInputSearch}
            />
            <FlatList 
                data={search}
                renderItem={({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={25} />
                        </View>
                        <Text style={styles.locationText}>
                            {item.description}
                        </Text>
                    </View>
                )}
            />
        </View>
    )
}

export default DestinationSearch
