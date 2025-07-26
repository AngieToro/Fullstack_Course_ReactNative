import React from 'react';
import { StyleSheet } from 'react-native';

const stylesFlex = StyleSheet.create({

       flexContainer: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            gap: 10
        },
        flexItemA: {
            flexGrow: 0,                    //solo usará el espacio que requiere su contenido y dejará el resto del espacio para otros elementos flexibles.
            backgroundColor: 'green',
            padding: 20
        },
        flexItemB: {
            flexGrow: 1,                    //every child will set to an equal size inside the container
            backgroundColor: 'blue',
            padding: 20
        }
    });

export default stylesFlex;