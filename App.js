import React from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
const App = () => {
  const [text, setText] = React.useState('');
  const [keya, setKeya] = React.useState('');
  const [keyb, setKeyb] = React.useState('');
  let x = 0;
 
  const alfabe=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const encryptWord = () => {
    let smetin='';
    let Ey = 0; 
    pmetin = text.split('');
    try {
      for (let i = 0; i < text.length; i++) {
        for (let j = 0; j < alfabe.length; j++) {
          //sıfırdan dizinin uzunluğuna kadar 1 artır
          if (pmetin[i] == alfabe[j]) {
            break;
          } //eleman dizide varsa döngüden çık
          else {
            x++;
          } //yoksa dizideki yerini bulmak için 1 artır
        }
        if (pmetin == ' ') {
          smetin += ' '; //şifreli metine ekle ama boşluğu şifreleme
          x = 0; //dizideki yerini sıfırla
        } else {
          Ey = (parseInt(keya) * parseInt(x) + parseInt(keyb)) % 26; //y=ax+b formülüne göre modunu alarak şifrele
          x = 0; //dizideki yerini sıfırla
          smetin += alfabe[Ey]; //ve dizideki yerini bul değişkene at
        }
      }
    } 
    catch{
      Alert.alert('Hatalı Veri Girişi');
    }
    Alert.alert('Şifrelenmiş Metin: ' + smetin); //oluşan şifreli metni yazdır
    smetin='';
  }
  const decryptWord = () => {
    xmetin = text.split('');
    let cmetin='';
    let mters=0;
    let Dy=0;
      try{
        for(let i=0;i<text.length;i++){
          for(let j=0;j<alfabe.length;j++){
            if(xmetin[i]==alfabe[j]){break;}
            else{x++;}
          }
          if(xmetin==' '){
            cmetin+=' ';
            x=0;
          }
          else{
            for(let modters=1;modters<27;modters++){
              if((parseInt(keya)*modters)%26==1){
                mters=modters;
                break;
              }
            }
            if(mters!=0){
              if(x-(parseInt(keyb))<0)x+=26;
              Dy=(parseInt(mters)*(parseInt(x)-parseInt(keyb)))%26;
              x=0;
              cmetin+=alfabe[Dy]
            }
            else if(mters==0){
              Alert.alert('a anahtarının modüler tersi olmadığı için çözme işlemi gerçekleştirilemiyor!\nBu yüzden a anahtarı tek sayı olmalıdır.', 'Modüler Ters')
            }
          }
        }
      }
      catch{
        Alert.alert('Hatalı Veri Girişi');
      }
      Alert.alert('Şifresi çözülmüş Metin: ' + cmetin);
      cmetin='';
  }
  return (
    <ScrollView style={styles.backgroundStyle}>
      <View>
        <TextInput
          label='Şifrelenecek Metin'
          value={text}
          onChangeText={text => setText(text.toLowerCase())}
        />
        <View style={styles.input}>
          <TextInput
            style={{margin: 10}}
            label='Key 1'
            value={keya}
            onChangeText={keya => setKeya(keya)}
            keyboardType='numeric'
          />
          <TextInput
            style={{margin: 10}}
            label='Key 2'
            value={keyb}
            onChangeText={keyb => setKeyb(keyb)}
            keyboardType='numeric'
          />
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => encryptWord()}>
            Şifrele
          </Button>
          <Button
            style={styles.button}
            mode='contained'
            onPress={() => decryptWord()}>
            Şifre Çöz
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle:{
    padding:10,
    flex:1,
    backgroundColor:'white'
  },
  button:{
    margin:10,
  },
  input:
  {
    margin:10,
    flexDirection:'column',
  }
});

export default App;