import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, Image, Button } from 'react-native';
import { Card } from 'react-native-elements';
import { AntDesign } from 'react-native-vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

var itemData = []
export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            dataArr: [],
            vote: 0
        }
    }

    componentDidMount() {

        let collections = {
            category: "movies",
            language: "telugu",
            genre: "all",
            sort: "voting"
        };
        fetch('https://hoblist.com/movieList',
            {
                method: 'POST',

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(collections),

            }).then(response => response.json())
            .then(data => {




                data.result.map((x) => {

                    itemData.push(x)

                })

                this.setState({
                    dataArr: itemData
                })
              this.state.dataArr.map((x)=>{
                (x.voted).map((number)=>{
                    console.log(number.upVoted)
                    this.setState({
                        vote:number.upVoted
                    }) 
                })
              })
            }).catch(error => console.log(error))
    }


    addVote=(id)=>{
       
       console.log(id)
       /* this.setState({
            vote:this.state.vote+1
        })*/
    }

    render() {

       

        let DisplayData =
            this.state.dataArr.map((x,index) => {
                
                let director = []
                director.push(x)
                return (

                    <FlatList
                       key={index}
                        data={director}
                        renderItem={({ item }) =>
                            <View >
                                <View style={{ top: 80 }}>
                                    <TouchableOpacity onPress={()=>this.addVote(index)}>
                                        <AntDesign name="caretup" size={40} />
                                    </TouchableOpacity>
                                    <Text style={{fontWeight:'bold',left:15,fontSize:20}}>{this.state.vote}</Text>
                                    <TouchableOpacity>
                                        <AntDesign name="caretdown" size={40} />
                                    </TouchableOpacity>
                                </View>

                                <View>
                                    <Image source={{ uri: item.poster }} style={{ height: 150, width: 125, left: 50, top: -10, borderRadius: 10 }} />
                                </View>

                                <View style={{ left: 190, top: -140 }}>
                                    <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text>Genere:{item.genre}</Text>

                                    <Text>Director:{item.director}</Text>
                                    <Text>Stars:{item.stars}</Text>
                                    <Text style={{ color: 'blue' }}>{item.pageViews}|Voted by {item.totalVoted}People</Text>

                                </View>
                                <View style={{ marginTop: -70, width: 300, left: 20 }}>
                                    <Button title="watch trailer" />
                                </View>

                            </View>
                        }
                    />

                )


            })


        return (

            <ScrollView style={Styles.container}>

                {DisplayData}


            </ScrollView>


        )
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 1

    }
})