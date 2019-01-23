import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    
    state = {
        albums: []
    };

    componentWillMount() {
        debugger;
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => { console.log(response); });
    }

    render() {
        return (
            <View />
        );
    }

}

export default AlbumList;
