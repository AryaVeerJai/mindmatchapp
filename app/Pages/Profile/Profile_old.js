// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Design 1

// import React from 'react';
// import { View, Text, StyleSheet, Image, useColorScheme, ScrollView} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import IoIcon from 'react-native-vector-icons/Ionicons';

// const Profile = () => {
//   const colorScheme = useColorScheme();
//     // Sample profile data
//   const profileData = {
//     name: 'John Doe',
//     bio: 'Software Developer',
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     posts: 10,
//     followers: 1000,
//     following: 500,
//     recentPosts: [
//       // require('./assets/post1.jpg'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       // Add more images as needed
//     ],
//   };

//   return (
//     <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         // style={backgroundStyle}
//         >
//     <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' }]}>
//       <View style={[styles.topBar, { backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' }]}>
//         <Text style={[styles.title, { color: colorScheme === 'dark' ? '#fff' : '#293241' }]}>Profile</Text>
//         <View style={styles.iconContainer}>
//           <IoIcon.Button name="search-outline" size={30} 
//           backgroundColor={colorScheme === 'dark' ? '#333' : '#fff'} 
//           color={colorScheme === 'dark' ? '#fff' : '#293241'} />
//           <Icon.Button name="sliders" 
//           backgroundColor={colorScheme === 'dark' ? '#333' : '#fff'} size={30} 
//           color={colorScheme === 'dark' ? '#fff' : '#293241'} />
//         </View>
//       </View>
//       <View style={styles.header}>
//         <Image
//           source={require('../../../profile.webp')} // Replace with your profile image
//           style={styles.profileImage}
//         />
//         <Text style={styles.name}>John Doe</Text>
//         <Text style={styles.bio}>Software Developer</Text>
//       </View>
//       <View style={styles.details}>
//         <View style={styles.detailItem}>
//           <Icon name="envelope" size={20} color="#777" />
//           <Text style={styles.detailText}>john.doe@example.com</Text>
//         </View>
//         <View style={styles.detailItem}>
//           <Icon name="phone" size={20} color="#777" />
//           <Text style={styles.detailText}>123-456-7890</Text>
//         </View>
//         {/* Add more details as needed */}
//         <View style={styles.infoContainer}>
//          <Text style={styles.sectionTitle}>Recent Posts</Text>
//          <ScrollView horizontal>
//            {profileData.recentPosts.map((post, index) => (
//              <Image key={index} source={post} style={styles.postImage} />
//            ))}
//          </ScrollView>
//        </View>
//       </View>
//     </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   topBar: {
//     padding: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: '500',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//   },
//   header: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   bio: {
//     fontSize: 18,
//     color: '#777',
//   },
//   details: {
//     paddingHorizontal: 20,
//     marginTop: 20,
//   },
//   detailItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   detailText: {
//     marginLeft: 10,
//     fontSize: 16,
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//     postImage: {
//     width: 110,
//     height: 100,
//     marginRight: 10,
//     borderRadius: 10,
//     margin: 'auto',
//   },
// });

// export default Profile;



// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Design 2
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const ProfilePage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../../profile.webp')} // Replace with actual profile picture
//         style={styles.profilePicture}
//       />
//       <Text style={styles.username}>John Doe</Text>
//       <Text style={styles.bio}>
//         🌟 Passionate photographer | Coffee lover ☕ | Travel enthusiast ✈️
//       </Text>
//       <View style={styles.statsContainer}>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>1.2K</Text>
//           <Text style={styles.statLabel}>Posts</Text>
//         </View>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>3.5K</Text>
//           <Text style={styles.statLabel}>Followers</Text>
//         </View>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>1.8K</Text>
//           <Text style={styles.statLabel}>Following</Text>
//         </View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   profilePicture: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 16,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   bio: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 24,
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default ProfilePage;


// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- Design 3
// import React from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const ProfilePage = () => {
//   return (
//     <View style={styles.container}>
//       <Image
//         source={require('../../../profile.webp')} // Replace with actual profile picture
//         style={styles.profilePicture}
//       />
//       <Text style={styles.username}>Amy Rachel</Text>
//       <Text style={styles.location}>Boston, USA</Text>
//       <Text style={styles.occupation}>Software Developer</Text>
//       <Text style={styles.age}>23 y.o.</Text>
//       <View style={styles.buttonsContainer}>
//         <Text style={styles.followButton}>FOLLOW</Text>
//         <Text style={styles.messageButton}>MESSAGE</Text>
//       </View>
//       <View style={styles.statsContainer}>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>10</Text>
//           <Text style={styles.statLabel}>POSTS</Text>
//         </View>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>4M</Text>
//           <Text style={styles.statLabel}>FOLLOWERS</Text>
//         </View>
//         <View style={styles.statItem}>
//           <Text style={styles.statNumber}>34</Text>
//           <Text style={styles.statLabel}>FOLLOWING</Text>
//         </View>
//       </View>
//       {/* Recent posts thumbnails */}
//       {/* Replace with actual post images */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 16,
//   },
//   profilePicture: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     marginBottom: 16,
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   location: {
//     fontSize: 16,
//     color: '#888',
//   },
//   occupation: {
//     fontSize: 16,
//     color: '#888',
//   },
//   age: {
//     fontSize: 16,
//     color: '#888',
//     marginBottom: 24,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     marginBottom: 24,
//   },
//   followButton: {
//     fontSize: 16,
//     color: '#007AFF',
//     marginRight: 16,
//   },
//   messageButton: {
//     fontSize: 16,
//     color: '#007AFF',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//   },
//   statItem: {
//     alignItems: 'center',
//   },
//   statNumber: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   statLabel: {
//     fontSize: 14,
//     color: '#888',
//   },
// });

// export default ProfilePage;


// Design 4

// import React from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

// const ProfileScreen = () => {
//   // Sample profile data
//   const profileData = {
//     name: 'John Doe',
//     bio: 'Software Developer',
//     email: 'john.doe@example.com',
//     phone: '123-456-7890',
//     posts: 10,
//     followers: 1000,
//     following: 500,
//     recentPosts: [
//       // require('./assets/post1.jpg'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       require('../../../profile.webp'),
//       // Add more images as needed
//     ],
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Profile Picture */}
//       <Image source={require('../../../profile.webp')} style={styles.profileImage} />

//       {/* Name and Bio */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.name}>{profileData.name}</Text>
//         <Text style={styles.bio}>{profileData.bio}</Text>
//       </View>

//       {/* Contact Information */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.sectionTitle}>Contact Information</Text>
//         <Text>Email: {profileData.email}</Text>
//         <Text>Phone: {profileData.phone}</Text>
//       </View>

//       {/* Stats: Posts, Followers, Following */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.sectionTitle}>Stats</Text>
//         <Text>Posts: {profileData.posts}</Text>
//         <Text>Followers: {profileData.followers}</Text>
//         <Text>Following: {profileData.following}</Text>
//       </View>

//       {/* Recent Posts */}
//       <View style={styles.infoContainer}>
//         <Text style={styles.sectionTitle}>Recent Posts</Text>
//         <ScrollView horizontal>
//           {profileData.recentPosts.map((post, index) => (
//             <Image key={index} source={post} style={styles.postImage} />
//           ))}
//         </ScrollView>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   profileImage: {
//     width: 150,
//     height: 150,
//     borderRadius: 75,
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 5,
//   },
//   bio: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   postImage: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//     borderRadius: 10,
//   },
// });

// export default ProfileScreen;


import React from 'react';
import { View, Text, StyleSheet, Image, useColorScheme, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  const colorScheme = useColorScheme();
  // Sample profile data
  const profileData = {
    name: 'John Doe',
    bio: 'Software Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    posts: 10,
    followers: 1000,
    following: 500,
    recentPosts: [
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      require('../../../profile.webp'),
      // Add more images as needed
    ],
  };

  // Function to chunk the array into smaller arrays of size n
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, i) => (i % size === 0 ? [...acc, array.slice(i, i + size)] : acc), []);
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      // style={backgroundStyle}
    >
      <View style={[styles.container, { backgroundColor: colorScheme === 'dark' ? '#000' : '#fff' }]}>
        <View style={[styles.topBar, { backgroundColor: colorScheme === 'dark' ? '#333' : '#fff' }]}>
          <Text style={[styles.title, { color: colorScheme === 'dark' ? '#fff' : '#293241' }]}>Profile</Text>
          <View style={styles.iconContainer}>
            <IoIcon.Button name="search-outline" size={30}
              backgroundColor={colorScheme === 'dark' ? '#333' : '#fff'}
              color={colorScheme === 'dark' ? '#fff' : '#293241'} />
            <Icon.Button name="sliders"
              backgroundColor={colorScheme === 'dark' ? '#333' : '#fff'} size={30}
              color={colorScheme === 'dark' ? '#fff' : '#293241'} />
          </View>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../../../profile.webp')} // Replace with your profile image
            style={styles.profileImage}
          />
          <Text style={[styles.name,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>John Doe</Text>
          <Text style={styles.bio}>Software Developer</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Icon name="envelope" size={20} color="#777" />
            <Text style={[styles.detailText,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>john.doe@example.com</Text>
          </View>
          <View style={styles.detailItem}>
            <Icon name="phone" size={20} color="#777" />
            <Text style={[styles.detailText,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>123-456-7890</Text>
          </View>
          {/* states: like followers... */}
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>10</Text>
              <Text style={styles.statLabel}>POSTS</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>4M</Text>
              <Text style={styles.statLabel}>FOLLOWERS</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber,{ color: colorScheme === 'dark' ? '#fff' : '#000' }]}>34</Text>
              <Text style={styles.statLabel}>FOLLOWING</Text>
            </View>
          </View>
          {/* Add more details as needed */}
          <View style={styles.infoContainer}>
            <Text style={styles.sectionTitle}>Recent Posts</Text>
            {/* Chunk the recent posts into rows of three */}
            {chunkArray(profileData.recentPosts, 3).map((row, rowIndex) => (
              <View key={rowIndex} style={styles.rowContainer}>
                {row.map((post, index) => (
                  <Image key={index} source={post} style={styles.postImage} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  header: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bio: {
    fontSize: 18,
    color: '#777',
  },
  details: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
  },
  infoContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  postImage: {
    width: '30%', // Adjust width as needed
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
});

export default Profile;
