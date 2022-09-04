import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView';
import Task from './components/Tasks';

export default function App() {

  const [task, setTask] = useState("")
  const [taskItem, setTask_item] = useState([])

  const handleAddTask = () => {
    setTask_item([...taskItem, task])
    setTask(null);
    console.log(task)
  }

  const completeTask = (index) => {
    let itemsCopy = ([...taskItem])
    itemsCopy.splice(index, 1);
    setTask_item(itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      {/* {Today Tasks} */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>

        <View style={styles.items}>
          {/* task list */}
          {
            taskItem.map((item, i)=>{
              return (
                <TouchableOpacity key={i} onPress={() => completeTask(i)}>
                  <Task text={item}/>
                </TouchableOpacity>
              )
            })
          }
          
        </View>

      </View>

    {/* write task */}
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.writeTaskWraper}
    >

      <TextInput style={styles.input} placeholder={'write a task'} value={task} onChangeText={text => setTask(text)}/>
      
      <TouchableOpacity onPress={()=> handleAddTask()}>
        <View style={styles.addWraper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle:{
    fontSize: 24,
    fontWeight: 'bold'
  },
  items:{
    marginTop: 30,
  },
  writeTaskWraper:{
    position:'absolute',
    bottom:30,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  input:{
    paddingVertical:15,
    paddingHorizontal:15,
    borderColor:'#c0c0c0',
    borderRadius:60,
    backgroundColor:'#fff',
    borderWidth:1,
    width:250,
    height:50,
  },
  addWraper:{
    width:50,
    height:50,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'#c0c0c0',
    borderWidth:1,
    shadowColor:'#111',
  },
  addText:{},
});
