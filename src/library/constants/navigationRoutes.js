import {colors} from '.';
import {Login, SignIn, MyFlights, Location, Destination, Received, SelectDate, SelectPassengers} from '../../containers';

const options = {
  title: '',
  headerTintColor: colors.blue_c,
  headerHideShadow: true,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
export const stackList = [
  // {
  //   component: SignIn,
  //   name: 'SignIn',
  //   options: {...options, headerShown: false},
  // },
  {
    component: Login,
    name: 'Login',
    options: {...options, headerShown: false},
  },
  {
    component: MyFlights,
    name: 'MyFlights',
    options: {...options, title: 'My Flights'},
  },
  // {
  //   component: MyFlights,
  //   name: 'MyFlights',
  //   options: {...options, title: 'My Flights'},
  // },
  {
    component: Location,
    name: 'Location',
    options: {...options, headerShown: false},
  },
  {
    component: Destination,
    name: 'Destination',
    options: {...options, headerShown: false},
  },
  {
    component: SelectDate,
    name: 'SelectDate',
    options: {...options, headerShown: false},
  },
  {
    component: SelectPassengers,
    name: 'SelectPassengers',
    options: {...options, headerShown: false},
  },
  {
    component: Received,
    name: 'Received',
    options: {...options, headerShown: false},
  },
  {
    component: SignIn,
    name: 'SignIn',
    options: {...options, headerShown: false},
  },
  // {
  //   component: Login,
  //   name: 'Login',
  //   options: {...options, headerShown: false},
  // },
];
