import { mount } from 'enzyme'
import  App from '../App'
import { firebaseConfig, auth } from '../components/firebase'

const template = {
  apiKey: "AIzaSyAktkCIUDF9VSBMXtopAWbfIW65g_EPLz8",
  authDomain: "healthforms-342118.firebaseapp.com",
  databaseURL: "https://healthforms-342118-default-rtdb.firebaseio.com",
  projectId: "healthforms-342118",
  storageBucket: "healthforms-342118.appspot.com",
  messagingSenderId: "835553252178",
  appId: "1:835553252178:web:35a404dac261162d8a208b"
}

const credentidal = {
  user: 'temp@gmail.com',
  password: '12345'
}

describe('Test integracion firebase con APP', () => {

  test('AppIntroduction debe mostrarse correctmente', () => {
    const wrapper = mount(
        <App  />
    )
    expect(wrapper.find('AppIntroduction').exists()).toBe(true)
  })

  test('Firebase tiene una conexion correcta', () => {
    try{
      auth()
      expect(true).toBe(true)
    }catch(e) {
      throw e
    }
  })

  test('Firebase tiene una configuracion correcta', () => {
    expect(firebaseConfig).toEqual(template)
  })

  test('la aplicacion tiene conexion con Firebase', () => {
    try{
      auth.signInWithEmailAndPassword(credentidal.user, credentidal.password)
      .then(userCredentials => {
          const user = userCredentials.user;
          let name = username.split('.')[0];
          name = name.charAt(0).toUpperCase() + name.slice(1);
          let email = username;
          setMailSubmitting(false);
          expect(true).toBe(true)

      }).catch(err => {
        throw err
      });
    }catch(e) {
      throw e
    }
  })

})
