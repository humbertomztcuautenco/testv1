import { StyleSheet, Text, View, NativeModules, Button } from 'react-native'
import React, {useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const {CustomModule} = NativeModules;
const value = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin risus, vitae interdum leo. Mauris ac lectus a dolor congue facilisis id id lacus. Vivamus tristique metus in est bibendum, sit amet auctor risus auctor. Integer eu urna at lacus porttitor tempus. Phasellus sed lectus vel diam rutrum bibendum non non mauris. Nullam et ante ante. Donec id sollicitudin mauris. Phasellus rutrum dolor eu lobortis efficitur. Cras maximus risus eget purus aliquam hendrerit. Pellentesque rutrum ultrices tellus, in varius lorem placerat vel. Suspendisse potenti. Duis a ligula scelerisque, rutrum sapien et, faucibus est. Fusce id nulla eleifend, lobortis lorem eu, finibus ex. Integer ullamcorper lorem ut erat fringilla, in volutpat nulla commodo. Vestibulum viverra scelerisque neque, at tincidunt lacus commodo ut. Duis elementum condimentum ex, nec varius mi dignissim vel. Suspendisse dignissim lectus sit amet elit efficitur commodo. Etiam aliquam diam a metus sollicitudin, nec tincidunt risus egestas. Proin rhoncus mauris ac ligula commodo, in finibus leo viverra. Phasellus vel mi sit amet orci congue placerat id ut sem. Aliquam vitae vestibulum velit. Duis at tincidunt mauris. In hendrerit ante metus, eu pellentesque metus venenatis ut. Nunc laoreet massa non dui tempor, ac malesuada tellus ultrices. Sed eget ante et est dignissim gravida id id lectus. Vestibulum in faucibus risus, id dictum quam. Ut eget tincidunt justo. Nam accumsan aliquam sagittis. Sed condimentum ligula eros, ac tempor nisl efficitur sit amet. Suspendisse consectetur est at erat tincidunt, vel interdum erat tempus. Integer gravida varius aliquam. Etiam posuere erat a risus sollicitudin, ac eleifend mauris iaculis. Nunc id ex pharetra, maximus orci eget, lacinia nunc. Ut pharetra eros quis libero posuere tincidunt. Aenean viverra magna non mauris fermentum, at tristique lectus tincidunt. Curabitur scelerisque sem et purus bibendum, nec finibus elit posuere. Phasellus nec eros hendrerit, posuere sem in, suscipit justo. Quisque tempus urna sed neque tincidunt volutpat. Nunc nec posuere diam. Nullam a cursus lacus, a ullamcorper nunc. Morbi lobortis ante quis nunc fringilla, eget cursus lectus hendrerit. Aenean tincidunt pulvinar elit sed gravida. Curabitur tincidunt efficitur diam sed tempor. Suspendisse facilisis tellus ut sem imperdiet, et tempus lacus scelerisque. Aliquam ut augue at lectus egestas volutpat a a dolor. Donec iaculis sapien libero, et pharetra urna feugiat vitae. Nunc efficitur, odio in egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu sollicitudin risus, vitae interdum leo. Mauris ac lectus a dolor congue facilisis id id lacus. Vivamus tristique metus in est bibendum, sit amet auctor risus auctor. Integer eu urna at lacus porttitor tempus. Phasellus sed lectus vel diam rutrum bibendum non non mauris. Nullam et ante ante. Donec id sollicitudin mauris. Phasellus rutrum dolor eu lobortis efficitur. Cras maximus risus eget purus aliquam hendrerit. Pellentesque rutrum ultrices tellus, in varius lorem placerat vel. Suspendisse potenti. Duis a ligula scelerisque, rutrum sapien et, faucibus est. Fusce id nulla eleifend, lobortis lorem eu, finibus ex. Integer ullamcorper lorem ut erat fringilla, in volutpat nulla commodo. Vestibulum viverra scelerisque neque, at tincidunt lacus commodo ut. Duis elementum condimentum ex, nec varius mi dignissim vel. Suspendisse dignissim lectus sit amet elit efficitur commodo. Etiam aliquam diam a metus sollicitudin, nec tincidunt risus egestas. Proin rhoncus mauris ac ligula commodo, in finibus leo viverra. Phasellus vel mi sit amet orci congue placerat id ut sem. Aliquam vitae vestibulum velit. Duis at tincidunt mauris. In hendrerit ante metus, eu pellentesque metus venenatis ut. Nunc laoreet massa non dui tempor, ac malesuada tellus ultrices. Sed eget ante et est dignissim gravida id id lectus. Vestibulum in faucibus risus, id dictum quam. Ut eget tincidunt justo. Nam accumsan aliquam sagittis. Sed condimentum ligula eros, ac tempor nisl efficitur sit amet. Suspendisse consectetur est at erat tincidunt, vel interdum erat tempus. Integer gravida varius aliquam. Etiam posuere erat a risus sollicitudin, ac eleifend mauris iaculis. Nunc id ex pharetra, maximus orci eget, lacinia nunc. Ut pharetra eros quis libero posuere tincidunt. Aenean viverra magna non mauris fermentum, at tristique lectus tincidunt. Curabitur scelerisque sem et purus bibendum, nec finibus elit posuere. Phasellus nec eros hendrerit, posuere sem in, suscipit justo. Quisque tempus urna sed neque tincidunt volutpat. Nunc nec posuere diam. Nullam a cursus lacus, a ullamcorper nunc. Morbi lobortis ante quis nunc fringilla, eget cursus lectus hendrerit. Aenean tincidunt pulvinar elit sed gravida. Curabitur tincidunt efficitur diam sed tempor. Suspendisse facilisis tellus ut sem imperdiet, et tempus lacus scelerisque. Aliquam ut augue at lectus egestas volutpat a a dolor. Donec iaculis sapien libero, et pharetra urna feugiat vitae. Nunc efficitur, odio in egestas"
const onSumit = async () => {
  try {
    const name = 'crear tarea'
    // const result = await CustomModule.customEvent(name);
    const result = CustomModule.scheduleJob();
    console.log(` ===== ${result}`);
    alert("Se inicio la ejecución en segundo plano cada 15 min. se realizará una petición al api. ")
  } catch (e) {
    console.error(e);
  }
}

const onCancel = async () => {
  try {
    // const name = 'crear tarea'
    // const result = await CustomModule.customEvent(name);
    const result = CustomModule.cancelJob();
    console.log(` ===== ${result}`);
    alert("Se detendrá la ejecución de la tarea en segundo plano.")
  } catch (e) {
    console.error(e);
  }
}

const App = () => {

  useEffect(() => {
    (async()=>{
      try {
        await AsyncStorage.setItem('data', value)
      } catch (e) {
        console.log(e);
      }
    })()
  }, [])
  

  return (
    <View style={styles.body}>
      <Text>Test de tareas en segundo plano.</Text>
      <Text>Modulo nativo...</Text>

      <Button
        title='Programar Tarea.'
        onPress={()=>onSumit()}
        style={styles.okButton}
      />

      <Button
        title="Cancelar Tarea"
        onPress={() => onCancel()}
        style={styles.cancelButton}
        color="red"
      />

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  body: {
    height:"100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  okButton: {
    marginTop: 20
  },
  cancelButton: {
    backgroundColor: 'red',
    marginTop: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  cancelButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})