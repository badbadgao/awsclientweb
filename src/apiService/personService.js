import clientProxy from './clientProxy';

// export const getPerson = (year, title) => new Promise((resolve, reject) => {
//   clientProxy.get('http://localhost:3000/person').then(response => {
//     resolve(response);
//   }).catch((error) => {
//     console.log(error);
//     reject(error);
//   })
// });

export const getPerson = async (year, title) => {
  try {
    const person = await clientProxy.get(`http://localhost:3000/person/${year}/${title}`);
    return person;
  } catch(error) {
    console.log(error);
  };
};