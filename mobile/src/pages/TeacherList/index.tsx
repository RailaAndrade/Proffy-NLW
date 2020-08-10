import React, { useState, useEffect } from 'react'
import { View,Text, TextInput, AsyncStorage } from 'react-native';
import styles from './styles'
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'
import api from '../../services/api';
import Favorites from '../Favortites';

function TeacherList(){
    const[isFiltersVisible, setIsFiltersVisible]= useState(false);
    function handleTogleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible)
    }
    const [teachers, setTeachers]= useState([]);
    const [subject, setSubject]=useState('');
    const [week_day, setWeekDay]=useState('');
    const [time, setTime]=useState('');
    const [favorites,setFavorites]=useState<number[]>([]);
  
    function loadFavorites(){
        AsyncStorage.getItem('favorites').then(response=>{
            if(response){
               const favoritedTeachers= JSON.parse(response);
               const favoritedTeachersIds=favoritedTeachers.map((teacher:Teacher)=>{
                    return teacher.id
               })
               setFavorites(favoritedTeachersIds);
            }
            
        })
    }

    async function handleFilterSubmit(){
        loadFavorites();
      
  
      const response=await api.get('classes',{
        params:{
          subject,
          week_day,
          time
        }
      })
      setIsFiltersVisible(false);
      setTeachers(response.data);
      
  
    }


    return (
        <View style={styles.container}>
            <PageHeader title="Proffys Disponíveis" headerRight={
            <BorderlessButton onPress={handleTogleFiltersVisible}>

                <Feather name="filter" size={20} color="#FFF"></Feather>
            </BorderlessButton>}>
               {isFiltersVisible&&(  
               
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual a matéria?"
                            placeholderTextColor="#c1bccc"
                            value={subject}
                            onChangeText={text=>setSubject(text)}

                        />
                    
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia</Text>
                            <TextInput
                                value={week_day}
                                onChangeText={(text) => setWeekDay(text)}
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual o dia?"
                                />

                        </View>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                            <TextInput
                                value={time}
                                onChangeText={(text)=>setTime(text)}
                                placeholderTextColor="#c1bccc"
                                style={styles.input}
                                placeholder="Qual o horário?"

                            />

                        </View>
                    </View>
                    <RectButton onPress={handleFilterSubmit} style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>filtrar</Text>

                    </RectButton>
                    
                

                    </View>)}
            </PageHeader>
            <ScrollView style={styles.teacherList} contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:24
            }}>
                {teachers.map((teacher:Teacher)=>{
                return  <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>
                })}
            

            </ScrollView>
        
        </View>
    );
}

export default TeacherList;