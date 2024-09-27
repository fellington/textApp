import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './app/screens/HomePage';
import PostPartumInstr from './app/screens/PostPartumInstr';
import Support from './app/screens/Support';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home Page" component={HomePage} options={{ headerShown: false }} />
      <InsideStack.Screen name = "postpartuminstr" component={PostPartumInstr} options={{headerShown: false}}/>
      <InsideStack.Screen name="support" component={Support} options={{ headerShown: false }} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inside">
        <Stack.Screen name="Inside" component={InsideLayout} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
