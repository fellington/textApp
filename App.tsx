import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import HomePage from './app/screens/HomePage';
import PostPartumInstr from './app/screens/PostPartumInstr';
import Support from './app/screens/Support';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';


const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name = "Home Page" component={HomePage} options={{headerShown: false}}/>
      <InsideStack.Screen name = "postpartuminstr" component={PostPartumInstr} options={{headerShown: false}}/>
      <InsideStack.Screen name = "support" component={Support} options={{headerShown: false}}/>
    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName = 'Login'>
        {user ? (
          <Stack.Screen name='Inside' component={InsideLayout} options ={{headerShown: false}}/>
        ) : (
          <Stack.Screen name='Login' component={Login} options ={{headerShown: false}}/>
        )}    
      </Stack.Navigator>
    </NavigationContainer>
  );
}


