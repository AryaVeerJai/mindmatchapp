import Storage from '../Utils/Storage';

async function getAccount() {
  return await Storage.get('account');
}

async function setAccount(data) {
  return await Storage.set('account', data);
}

// async function setAccount(data) {
//   try {
//     await Storage.set('account', data);
//   } catch (error) {
//     console.error('Error saving user data to AsyncStorage:', error);
//   }
// }



async function logout() {
  return await Storage.set('account', null);
  console.log('logout success')
}


export default {
  logout,
  getAccount,
  setAccount
};