// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// const CreatePoll = () => {
//   const [options, setOptions] = useState([null, null]);

//   const addOption = () => {
//     setOptions([...options, null]);
//   };

//   const chooseImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = image;
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   const removeOption = (indexToRemove) => {
//     setOptions(options.filter((_, index) => index !== indexToRemove));
//   };

//   const changeImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = image;
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         {options.map((option, index) => (
//           <View key={index} style={styles.imageContainer}>
//             {option ? (
//               <>
//                 <TouchableOpacity onPress={() => changeImage(index)}>
//                   <Image source={{ uri: option.path }} style={styles.imageOption} />
//                 </TouchableOpacity>
//                 {options.length > 2 && (
//                   <TouchableOpacity style={styles.removeButton} onPress={() => removeOption(index)}>
//                     <Text style={styles.removeButtonText}>Remove</Text>
//                   </TouchableOpacity>
//                 )}
//               </>
//             ) : (
//               <TouchableOpacity style={styles.addImageButton} onPress={() => chooseImage(index)}>
//                 <Text style={styles.addImageText}>Add Image</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}
//         <TouchableOpacity style={styles.addButton} onPress={addOption}>
//           <Text style={styles.buttonText}>Add Option</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 50,
//     backgroundColor: '#fff',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imageOption: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   removeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   addImageButton: {
//     width: 200,
//     height: 200,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addImageText: {
//     color: '#666',
//     fontSize: 16,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 15,
//     marginTop: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default CreatePoll;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';

// const CreatePoll = () => {
//   const [options, setOptions] = useState([null, null]);

//   const addOption = () => {
//     setOptions([...options, null]);
//   };

//   const chooseImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = { image, text: '' }; // Each option contains an image and a text
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   const removeOption = (indexToRemove) => {
//     setOptions(options.filter((_, index) => index !== indexToRemove));
//   };

//   const changeImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = { image, text: options[index].text };
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   const handleTextChange = (index, text) => {
//     const newOptions = [...options];
//     newOptions[index] = { ...newOptions[index], text };
//     setOptions(newOptions);
//   };

//   return (
//     <View style={[styles.containerforimageoption, {width: '100%'}]}>
//       <ScrollView>
//         <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10}}>
//         {options.map((option, index) => (
//           <View key={index} style={[styles.imageContainerforoption, {display: 'flex', width: '48%' }]}>
//             {option ? (
//               <View style={{}}>
//                 <TouchableOpacity onPress={() => changeImage(index)}>
//                   <Image source={{ uri: option.image.path }} style={styles.imageOption} />
//                 </TouchableOpacity>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Enter text..."
//                   value={option.text}
//                   onChangeText={(text) => handleTextChange(index, text)}
//                 />
//                 {options.length > 2 && (
//                   <TouchableOpacity style={styles.removeButtoninoption} onPress={() => removeOption(index)}>
//                     <Text style={styles.removeButtonText}>Remove</Text>
//                   </TouchableOpacity>
//                 )}
//                 </View>
//             ) : (
//               <TouchableOpacity style={styles.addImageButton} onPress={() => chooseImage(index)}>
//                 <Text style={styles.addImageText}>Add Image</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}
//         </View>
//         <TouchableOpacity style={styles.addButton} onPress={addOption}>
//           <Text style={styles.buttonText}>Add Option</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   containerforimageoption: {
//     flex: 1,
//     padding: 20,
//     // paddingTop: 50,
//     // backgroundColor: '#000',
//   },
//   imageContainerforoption: {
//     // flexDirection: 'row',
//     // alignItems: 'center',
//     marginBottom: 10,
//   },
//   imageOption: {
//     width: '100%',
//     height: 180,
//     borderRadius: 10,
//   },
//   removeButtoninoption: {
//     backgroundColor: 'red',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     // marginLeft: 10,
//   },
//   removeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   addImageButton: {
//     width: '100%',
//     height: 180,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addImageText: {
//     color: '#666',
//     fontSize: 16,
//   },
//   textInput: {
//     // width: 200,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginTop: 10,
//     // paddingHorizontal: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     flexDirection: 'row',
//     // paddingVertical: 15,
//     // marginTop: 20,
//     borderRadius: 10,
//     // height: 150,
//     // width: 'auto',
//     // alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default CreatePoll;


// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import { initializeApp } from '@react-native-firebase/app';
// import database from '@react-native-firebase/database';

// const CreatePoll = () => {
//   const [options, setOptions] = useState([null, null]);
//   const [pollTitle, setPollTitle] = useState('');

//   // Initialize Firebase app
//   initializeApp();

//   const addOption = () => {
//     setOptions([...options, null]);
//   };

//   const chooseImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = { image, text: '' }; // Each option contains an image and a text
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   const removeOption = (indexToRemove) => {
//     setOptions(options.filter((_, index) => index !== indexToRemove));
//   };

//   const changeImage = async (index) => {
//     try {
//       const image = await ImagePicker.openPicker({
//         width: 300,
//         height: 300,
//         cropping: true,
//       });
//       const newOptions = [...options];
//       newOptions[index] = { image, text: options[index].text };
//       setOptions(newOptions);
//     } catch (error) {
//       console.log('Error picking image: ', error);
//     }
//   };

//   const handleTextChange = (index, text) => {
//     const newOptions = [...options];
//     newOptions[index] = { ...newOptions[index], text };
//     setOptions(newOptions);
//   };

//   const sendPollDataToFirebase = () => {
//     const pollData = {
//       title: pollTitle,
//       options: options.filter(option => option !== null), // Exclude null values
//     };

//     // Reference to your Firebase database node where you want to store poll data
//     const pollRef = database().ref('polls').push();

//     // Save the poll data to the database
//     pollRef.set(pollData)
//       .then(() => {
//         console.log('Poll data sent to Firebase');
//         // Optionally, you can navigate to another screen or display a success message
//       })
//       .catch((error) => console.error('Error sending poll data to Firebase: ', error));
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView>
//         <TextInput
//           style={styles.titleInput}
//           placeholder="Enter poll title"
//           value={pollTitle}
//           onChangeText={setPollTitle}
//         />
//         {options.map((option, index) => (
//           <View key={index} style={styles.imageContainer}>
//             {option ? (
//               <>
//                 <TouchableOpacity onPress={() => changeImage(index)}>
//                   <Image source={{ uri: option.image.path }} style={styles.imageOption} />
//                 </TouchableOpacity>
//                 <TextInput
//                   style={styles.textInput}
//                   placeholder="Enter text..."
//                   value={option.text}
//                   onChangeText={(text) => handleTextChange(index, text)}
//                 />
//                 {options.length > 2 && (
//                   <TouchableOpacity style={styles.removeButton} onPress={() => removeOption(index)}>
//                     <Text style={styles.removeButtonText}>Remove</Text>
//                   </TouchableOpacity>
//                 )}
//               </>
//             ) : (
//               <TouchableOpacity style={styles.addImageButton} onPress={() => chooseImage(index)}>
//                 <Text style={styles.addImageText}>Add Image</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         ))}
//         <TouchableOpacity style={styles.addButton} onPress={addOption}>
//           <Text style={styles.buttonText}>Add Option</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.submitButton} onPress={sendPollDataToFirebase}>
//           <Text style={styles.buttonText}>Submit Poll</Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 50,
//     backgroundColor: '#fff',
//   },
//   titleInput: {
//     marginBottom: 20,
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   imageOption: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//   },
//   removeButton: {
//     backgroundColor: 'red',
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 5,
//     marginLeft: 10,
//   },
//   removeButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   addImageButton: {
//     width: 200,
//     height: 200,
//     backgroundColor: '#e0e0e0',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   addImageText: {
//     color: '#666',
//     fontSize: 16,
//   },
//   textInput: {
//     width: 200,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     marginTop: 10,
//     paddingHorizontal: 10,
//   },
//   addButton: {
//     backgroundColor: 'blue',
//     paddingVertical: 15,
//     marginTop: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   submitButton: {
//     backgroundColor: 'green',
//     paddingVertical: 15,
//     marginTop: 20,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default CreatePoll;



import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { initializeApp } from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const CreatePoll = () => {
  const [options, setOptions] = useState([null, null]);
  const [pollTitle, setPollTitle] = useState('');

  // Initialize Firebase app
  initializeApp();

  const addOption = () => {
    setOptions([...options, null]);
  };

  const chooseImage = async (index) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });

      // Generate a unique ID for the image
      const imageName = `${Date.now()}-${image.path.split('/').pop()}`;

      // Reference to the Firebase Storage bucket where you want to upload the image
      const storageRef = storage().ref(`pollimages/${imageName}`);

      // Upload the image to Firebase Storage
      await storageRef.putFile(image.path);

      // Get the download URL of the uploaded image
      const downloadURL = await storageRef.getDownloadURL();

      const newOptions = [...options];
      newOptions[index] = { image: downloadURL, text: '' }; // Store the download URL in the options array
      setOptions(newOptions);
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  const removeOption = (indexToRemove) => {
    setOptions(options.filter((_, index) => index !== indexToRemove));
  };

  const changeImage = async (index) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      // You can implement image replacement logic similar to chooseImage function
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  const handleTextChange = (index, text) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text };
    setOptions(newOptions);
  };

  const sendPollDataToFirebase = () => {
    const pollData = {
      title: pollTitle,
      options: options.filter(option => option !== null), // Exclude null values
    };

    // Reference to your Firebase database node where you want to store poll data
    const pollRef = database().ref('polls').push();

    // Save the poll data to the database
    pollRef.set(pollData)
      .then(() => {
        console.log('Poll data sent to Firebase');
        // Optionally, you can navigate to another screen or display a success message
      })
      .catch((error) => console.error('Error sending poll data to Firebase: ', error));
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TextInput
          style={styles.titleInput}
          placeholder="Enter poll title"
          value={pollTitle}
          onChangeText={setPollTitle}
        />
        {options.map((option, index) => (
          <View key={index} style={styles.imageContainer}>
            {option ? (
              <>
                <TouchableOpacity onPress={() => changeImage(index)}>
                  <Image source={{ uri: option.image }} style={styles.imageOption} />
                </TouchableOpacity>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter text..."
                  value={option.text}
                  onChangeText={(text) => handleTextChange(index, text)}
                />
                {options.length > 2 && (
                  <TouchableOpacity style={styles.removeButton} onPress={() => removeOption(index)}>
                    <Text style={styles.removeButtonText}>Remove</Text>
                  </TouchableOpacity>
                )}
              </>
            ) : (
              <TouchableOpacity style={styles.addImageButton} onPress={() => chooseImage(index)}>
                <Text style={styles.addImageText}>Add Image</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={addOption}>
          <Text style={styles.buttonText}>Add Option</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton} onPress={sendPollDataToFirebase}>
          <Text style={styles.buttonText}>Submit Poll</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  titleInput: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageOption: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addImageButton: {
    width: 200,
    height: 200,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageText: {
    color: '#666',
    fontSize: 16,
  },
  textInput: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default CreatePoll;
